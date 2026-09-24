/**
 * The /play island: mode row, difficulty row, board, controls and pad, plus
 * the pause and completion sheets. No account — the game in progress and the
 * player's stats live in localStorage and survive a reload.
 */
import { useCallback, useEffect, useReducer, useRef, useState } from 'preact/hooks';
import { APP_STORE_URL, PLAY_STORE_URL } from '../../consts';
import { track } from '../analytics';
import { DIFFICULTIES, displayName, isDifficulty, type Difficulty } from '../difficulty';
import { MODES, modeById, type ModeId } from '../modes';
import { HINTS_PER_GAME, hasProgress, newSession, reduce, remainingFor, type Action, type Session } from '../state';
import { readJson, writeJson } from '../storage';
import { AdSlot } from './AdSlot';
import { Board } from './Board';
import { BulbIcon, CheckIcon, EraseIcon, PauseIcon, PencilIcon, PlayIcon, UndoIcon } from './icons';
import './game.css';

const SESSION_KEY = 'session';
const STATS_KEY = 'stats';
const DIFFICULTY_KEY = 'difficulty';
const COMPLETE_AD_SLOT = import.meta.env.PUBLIC_ADSENSE_SLOT_COMPLETE as string | undefined;

interface DifficultyStats {
  played: number;
  won: number;
  best: number | null;
}
type Stats = Partial<Record<Difficulty, DifficultyStats>>;

const DIFFICULTY_COLOR: Record<Difficulty, string> = {
  easy: 'var(--easy)',
  medium: 'var(--medium)',
  hard: 'var(--hard)',
  expert: 'var(--expert)',
};

export function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  const mm = h > 0 ? String(m).padStart(2, '0') : String(m);
  return `${h > 0 ? `${h}:` : ''}${mm}:${String(s).padStart(2, '0')}`;
}

type State = { session: Session | null };
type GameAction = Action | { type: 'load'; session: Session };

function gameReducer(state: State, action: GameAction): State {
  if (action.type === 'load') return { session: action.session };
  if (!state.session) return state;
  const next = reduce(state.session, action);
  return next === state.session ? state : { session: next };
}

function restoreSession(): Session | null {
  const saved = readJson<Session>(SESSION_KEY);
  if (!saved || saved.completed || !Array.isArray(saved.values) || saved.values.length !== 81) return null;
  if (!isDifficulty(saved.difficulty) || !modeById(saved.mode).available) return null;
  return { ...saved, paused: false };
}

function recordStats(difficulty: Difficulty, won: boolean, seconds?: number): Stats {
  const stats = readJson<Stats>(STATS_KEY) ?? {};
  const entry = stats[difficulty] ?? { played: 0, won: 0, best: null };
  if (won && seconds !== undefined) {
    entry.won += 1;
    entry.best = entry.best === null ? seconds : Math.min(entry.best, seconds);
  } else {
    entry.played += 1;
  }
  stats[difficulty] = entry;
  writeJson(STATS_KEY, stats);
  return stats;
}

export default function Game() {
  const [{ session }, dispatch] = useReducer(gameReducer, { session: null });
  const [mode, setMode] = useState<ModeId>('classic');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [confirm, setConfirm] = useState<Difficulty | null>(null);
  const [showComplete, setShowComplete] = useState(false);
  const [lastPlaced, setLastPlaced] = useState<number | null>(null);
  const [bestBefore, setBestBefore] = useState<number | null>(null);
  const [isNewBest, setIsNewBest] = useState(false);
  const wasCompleted = useRef(false);

  const startGame = useCallback(
    async (difficulty: Difficulty, modeId: ModeId = mode) => {
      const gameMode = modeById(modeId);
      if (!gameMode.loadPuzzle) return;
      setLoading(true);
      setError(false);
      setShowComplete(false);
      setConfirm(null);
      try {
        const puzzle = await gameMode.loadPuzzle(difficulty);
        wasCompleted.current = false;
        dispatch({ type: 'load', session: newSession(modeId, difficulty, puzzle) });
        writeJson(DIFFICULTY_KEY, difficulty);
        recordStats(difficulty, false);
        track('play_start', { mode: modeId, difficulty, resumed: false });
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    },
    [mode]
  );

  // Resume the saved game, or deal a fresh one at the last-used difficulty.
  useEffect(() => {
    const saved = restoreSession();
    if (saved) {
      setMode(saved.mode);
      dispatch({ type: 'load', session: saved });
      setLoading(false);
      track('play_start', { mode: saved.mode, difficulty: saved.difficulty, resumed: true });
    } else {
      const last = readJson<string>(DIFFICULTY_KEY);
      void startGame(isDifficulty(last) ? last : 'easy');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist every change, so a reload or a closed tab loses nothing.
  useEffect(() => {
    if (session) writeJson(SESSION_KEY, session);
  }, [session]);

  // Clock: one tick a second while the game is live and the tab is visible.
  useEffect(() => {
    const id = window.setInterval(() => {
      if (document.visibilityState === 'visible') dispatch({ type: 'tick' });
    }, 1000);
    const onHide = () => {
      if (document.visibilityState === 'hidden') dispatch({ type: 'pause', paused: true });
    };
    document.addEventListener('visibilitychange', onHide);
    return () => {
      window.clearInterval(id);
      document.removeEventListener('visibilitychange', onHide);
    };
  }, []);

  // Completion: record the win once, then open the sheet.
  useEffect(() => {
    if (!session?.completed || wasCompleted.current) return;
    wasCompleted.current = true;
    const previousBest = readJson<Stats>(STATS_KEY)?.[session.difficulty]?.best ?? null;
    recordStats(session.difficulty, true, session.elapsed);
    setBestBefore(previousBest);
    setIsNewBest(previousBest === null || session.elapsed < previousBest);
    track('play_complete', {
      mode: session.mode,
      difficulty: session.difficulty,
      seconds: session.elapsed,
      mistakes: session.mistakes,
      hints: session.hintsUsed,
    });
    const timer = window.setTimeout(() => setShowComplete(true), 600);
    return () => window.clearTimeout(timer);
  }, [session?.completed]);

  const act = useCallback(
    (action: Action) => {
      if (action.type === 'enter' && session && session.selected !== null && !session.notesMode) {
        setLastPlaced(session.selected);
      }
      if (action.type === 'hint') track('play_hint', { difficulty: session?.difficulty ?? '' });
      dispatch(action);
    },
    [session]
  );

  const select = useCallback((index: number) => dispatch({ type: 'select', index }), []);

  // Keyboard: arrows move, 1-9 enter, Backspace erases, N notes, Z undo, H hint, Space pause.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
      if (confirm || showComplete) return;
      const key = event.key;
      const moves: Record<string, [number, number]> = {
        ArrowUp: [-1, 0],
        ArrowDown: [1, 0],
        ArrowLeft: [0, -1],
        ArrowRight: [0, 1],
      };
      let action: Action | null = null;
      if (moves[key]) action = { type: 'move', dRow: moves[key][0], dCol: moves[key][1] };
      else if (/^[1-9]$/.test(key) && !event.metaKey && !event.ctrlKey) action = { type: 'enter', value: Number(key) };
      else if (key === 'Backspace' || key === 'Delete' || key === '0') action = { type: 'erase' };
      else if ((key === 'z' || key === 'Z') && !event.shiftKey) action = { type: 'undo' };
      else if ((key === 'n' || key === 'N') && !event.metaKey && !event.ctrlKey) action = { type: 'toggleNotes' };
      else if ((key === 'h' || key === 'H') && !event.metaKey && !event.ctrlKey) action = { type: 'hint' };
      else if (key === ' ' && session) action = { type: 'pause', paused: !session.paused };
      if (!action) return;
      event.preventDefault();
      act(action);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [act, confirm, showComplete, session]);

  const chooseDifficulty = (difficulty: Difficulty) => {
    if (session && !session.completed && hasProgress(session)) {
      setConfirm(difficulty);
      return;
    }
    track('play_difficulty_change', { difficulty });
    void startGame(difficulty);
  };

  const newGame = (difficulty: Difficulty) => {
    track('play_new_game', { difficulty, from: session?.completed ? 'complete' : 'menu' });
    void startGame(difficulty);
  };

  const hintsLeft = session ? HINTS_PER_GAME - session.hintsUsed : 0;
  const disabled = !session || session.completed || session.paused;

  return (
    <div class="game">
      <div class="chip-row" role="group" aria-label="Game mode">
        {MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            class="chip"
            aria-pressed={m.id === mode}
            disabled={!m.available}
            onClick={() => m.available && m.id !== mode && (setMode(m.id), void startGame(session?.difficulty ?? 'easy', m.id))}
          >
            {m.name}
            {!m.available && <span class="soon">Soon</span>}
          </button>
        ))}
      </div>

      <div class="chip-row" role="group" aria-label="Difficulty">
        {DIFFICULTIES.map((d) => (
          <button
            key={d}
            type="button"
            class="chip"
            aria-pressed={session?.difficulty === d}
            onClick={() => chooseDifficulty(d)}
          >
            <span class="dash" style={{ background: DIFFICULTY_COLOR[d] }} />
            {displayName(d)}
          </button>
        ))}
      </div>

      <div class="topbar">
        <div class="stat">
          <span class="stat-label">Mistakes</span>
          <span class="stat-value" style={session?.mistakes ? { color: 'var(--conflict)' } : undefined}>
            {session?.mistakes ?? 0}
          </span>
        </div>
        <div class="stat" style={{ alignItems: 'center' }}>
          <span class="stat-label">{modeById(mode).name}</span>
          <span class="stat-value">{session ? displayName(session.difficulty) : '—'}</span>
        </div>
        <div class="timer">
          <span class="stat-value" aria-label="Elapsed time">{formatTime(session?.elapsed ?? 0)}</span>
          <button
            type="button"
            class="icon-btn"
            aria-label={session?.paused ? 'Resume' : 'Pause'}
            disabled={!session || session.completed}
            onClick={() => session && act({ type: 'pause', paused: !session.paused })}
          >
            {session?.paused ? <PlayIcon /> : <PauseIcon />}
          </button>
        </div>
      </div>

      <div class="board-wrap">
        {session ? (
          <Board session={session} onSelect={select} lastPlaced={lastPlaced} />
        ) : (
          <div class="board" aria-busy="true" />
        )}
        {(loading || error) && (
          <div class="board-paused">
            <div class="inner">
              {error ? (
                <>
                  <p>Could not load a puzzle.</p>
                  <button type="button" class="btn btn-primary" onClick={() => void startGame(session?.difficulty ?? 'easy')}>
                    Try again
                  </button>
                </>
              ) : (
                <p style={{ color: 'var(--on-surface-variant)' }}>Dealing a puzzle…</p>
              )}
            </div>
          </div>
        )}
        {session?.paused && !loading && (
          <div class="board-paused">
            <div class="inner">
              <p class="display" style={{ fontSize: '22px', fontWeight: 700 }}>Paused</p>
              <p style={{ color: 'var(--on-surface-variant)', fontSize: '14px' }}>
                {displayName(session.difficulty)} · {formatTime(session.elapsed)}
              </p>
              <button type="button" class="btn btn-primary" onClick={() => act({ type: 'pause', paused: false })}>
                <PlayIcon /> Resume
              </button>
            </div>
          </div>
        )}
      </div>

      <div class="controls">
        <Control
          label="Undo"
          badge={session && session.undo.length > 0 ? Math.min(session.undo.length, 99) : undefined}
          disabled={disabled || !session?.undo.length}
          onPress={() => act({ type: 'undo' })}
        >
          <UndoIcon />
        </Control>
        <Control label="Erase" disabled={disabled} onPress={() => act({ type: 'erase' })}>
          <EraseIcon />
        </Control>
        <Control
          label={session?.notesMode ? 'Notes on' : 'Notes'}
          active={session?.notesMode}
          disabled={disabled}
          onPress={() => act({ type: 'toggleNotes' })}
        >
          <PencilIcon />
        </Control>
        <Control
          label="Hint"
          accent
          badge={hintsLeft > 0 ? hintsLeft : undefined}
          disabled={disabled || hintsLeft === 0}
          onPress={() => act({ type: 'hint' })}
        >
          <BulbIcon />
        </Control>
      </div>

      <div class={`pad${session?.notesMode ? ' notes-mode' : ''}`}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => {
          const remaining = session ? remainingFor(session, digit) : 9;
          const done = remaining === 0;
          return (
            <button
              key={digit}
              type="button"
              class={done ? 'done' : ''}
              disabled={disabled || done}
              aria-label={session?.notesMode ? `Toggle note ${digit}` : `Place ${digit}, ${remaining} remaining`}
              onClick={() => act({ type: 'enter', value: digit })}
            >
              <span class="digit">{digit}</span>
              <span class="count">{done ? <CheckIcon /> : remaining < 9 ? remaining : ''}</span>
            </button>
          );
        })}
      </div>

      {confirm && session && (
        <div class="scrim" onClick={(e) => e.target === e.currentTarget && setConfirm(null)}>
          <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
            <h2 id="confirm-title" class="display" style={{ fontSize: '20px', fontWeight: 700 }}>
              Start a new {displayName(confirm)} game?
            </h2>
            <p style={{ marginTop: '8px', color: 'var(--on-surface-variant)', fontSize: '15px' }}>
              Your current {displayName(session.difficulty)} puzzle will be lost.
            </p>
            <div style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  track('play_difficulty_change', { difficulty: confirm });
                  void startGame(confirm);
                }}
              >
                New {displayName(confirm)} game
              </button>
              <button type="button" class="btn btn-outline" onClick={() => setConfirm(null)}>
                Keep playing
              </button>
            </div>
          </div>
        </div>
      )}

      {showComplete && session?.completed && (
        <div class="scrim">
          <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="complete-title">
            <p class="stat-label" style={{ color: 'var(--primary)', textAlign: 'center', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {modeById(session.mode).name} · {displayName(session.difficulty)}
            </p>
            <h2 id="complete-title" class="display" style={{ marginTop: '6px', fontSize: '28px', fontWeight: 700, textAlign: 'center' }}>
              {isNewBest ? 'New best time!' : 'Puzzle solved!'}
            </h2>
            <div class="stat-tiles" style={{ marginTop: '18px' }}>
              <div class="stat-tile">
                <div class="v">{formatTime(session.elapsed)}</div>
                <div class="l">Time</div>
              </div>
              <div class="stat-tile">
                <div class="v">{session.mistakes}</div>
                <div class="l">Mistakes</div>
              </div>
              <div class="stat-tile">
                <div class="v">{formatTime(Math.min(bestBefore ?? session.elapsed, session.elapsed))}</div>
                <div class="l">Best</div>
              </div>
            </div>

            <div style={{ display: 'grid', gap: '10px', marginTop: '20px' }}>
              <button type="button" class="btn btn-primary" onClick={() => newGame(session.difficulty)}>
                New {displayName(session.difficulty)} game
              </button>
              <div class="chip-row" style={{ justifyContent: 'center' }}>
                {DIFFICULTIES.filter((d) => d !== session.difficulty).map((d) => (
                  <button key={d} type="button" class="chip" onClick={() => newGame(d)}>
                    <span class="dash" style={{ background: DIFFICULTY_COLOR[d] }} />
                    {displayName(d)}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginTop: '18px' }}>
              <AdSlot slot={COMPLETE_AD_SLOT} minHeight={250} />
            </div>

            <div style={{ marginTop: '18px', padding: '14px', borderRadius: '12px', background: 'var(--gray-soft)' }}>
              <p style={{ fontSize: '14px', fontWeight: 600 }}>Keep your streak going in the app</p>
              <p style={{ marginTop: '2px', fontSize: '13px', color: 'var(--on-surface-variant)' }}>
                Daily challenges, stats, achievements and leaderboards — free, offline.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '12px' }}>
                <a class="btn btn-outline" style={{ height: '42px', fontSize: '13px' }} href={APP_STORE_URL} target="_blank" rel="noopener" data-store="ios">
                  App Store
                </a>
                <a class="btn btn-outline" style={{ height: '42px', fontSize: '13px' }} href={PLAY_STORE_URL} target="_blank" rel="noopener" data-store="android">
                  Google Play
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Control({
  label,
  badge,
  active = false,
  accent = false,
  disabled = false,
  onPress,
  children,
}: {
  label: string;
  badge?: number;
  active?: boolean;
  accent?: boolean;
  disabled?: boolean;
  onPress: () => void;
  children: preact.ComponentChildren;
}) {
  return (
    <button
      type="button"
      class={`control${active ? ' active' : ''}${accent ? ' accent' : ''}`}
      aria-pressed={active}
      disabled={disabled}
      onClick={onPress}
    >
      <span class="circle">
        {children}
        {badge !== undefined && <span class="badge">{badge}</span>}
      </span>
      {label}
    </button>
  );
}
