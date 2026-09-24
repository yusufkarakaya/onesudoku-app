/**
 * A game in progress and every move that can be made on it.
 *
 * Pure: the reducer takes a session and an action and returns the next
 * session, so the whole thing serialises straight into localStorage and a
 * reload resumes exactly where the player left off.
 *
 * Rules follow the app's classic defaults: no mistake limit (wrong entries are
 * shown and counted), unlimited undo, three hints per game.
 */
import type { Difficulty } from './difficulty';
import { findHint } from './engine/hint';
import { peers } from './engine/techniques';
import type { ModeId } from './modes';
import type { LoadedPuzzle } from './puzzles';

export const HINTS_PER_GAME = 3;
const MAX_UNDO = 300;

/** One cell's state before a move, so the move can be reversed. */
interface CellChange {
  index: number;
  value: number;
  notes: number;
}

export interface Session {
  mode: ModeId;
  difficulty: Difficulty;
  puzzleId: string;
  givens: number[];
  solution: number[];
  values: number[];
  /** Pencil marks as a 9-bit mask per cell; bit n set = note n. */
  notes: number[];
  selected: number | null;
  notesMode: boolean;
  mistakes: number;
  hintsUsed: number;
  /** Cells revealed by a hint, drawn like the player's own but counted apart. */
  hinted: number[];
  elapsed: number;
  paused: boolean;
  completed: boolean;
  undo: CellChange[][];
}

export type Action =
  | { type: 'select'; index: number }
  | { type: 'move'; dRow: number; dCol: number }
  | { type: 'enter'; value: number }
  | { type: 'erase' }
  | { type: 'toggleNotes' }
  | { type: 'undo' }
  | { type: 'hint' }
  | { type: 'tick' }
  | { type: 'pause'; paused: boolean };

export function newSession(mode: ModeId, difficulty: Difficulty, puzzle: LoadedPuzzle): Session {
  return {
    mode,
    difficulty,
    puzzleId: puzzle.puzzleId,
    givens: puzzle.givens,
    solution: puzzle.solution,
    values: puzzle.givens.slice(),
    notes: new Array(81).fill(0),
    selected: null,
    notesMode: false,
    mistakes: 0,
    hintsUsed: 0,
    hinted: [],
    elapsed: 0,
    paused: false,
    completed: false,
    undo: [],
  };
}

export const isGiven = (s: Session, index: number) => s.givens[index] !== 0;
export const isWrong = (s: Session, index: number) =>
  s.values[index] !== 0 && s.values[index] !== s.solution[index];

/** How many more of `digit` the board needs — the count under each pad key. */
export function remainingFor(s: Session, digit: number): number {
  let placed = 0;
  for (let i = 0; i < 81; i++) if (s.values[i] === digit && !isWrong(s, i)) placed++;
  return 9 - placed;
}

export function hasProgress(s: Session): boolean {
  return s.undo.length > 0 || s.elapsed > 0;
}

const isSolved = (values: number[], solution: number[]) =>
  values.every((value, i) => value === solution[i]);

/** Applies a set of cell writes, recording what they replaced for undo. */
function commit(s: Session, writes: CellChange[], extra: Partial<Session> = {}): Session {
  const values = s.values.slice();
  const notes = s.notes.slice();
  const before: CellChange[] = [];
  for (const write of writes) {
    before.push({ index: write.index, value: values[write.index], notes: notes[write.index] });
    values[write.index] = write.value;
    notes[write.index] = write.notes;
  }
  const undo = [...s.undo, before].slice(-MAX_UNDO);
  const completed = isSolved(values, s.solution);
  return { ...s, ...extra, values, notes, undo, completed, notesMode: completed ? false : s.notesMode };
}

/** Writes a value, and clears that digit from the notes of every peer. */
function placeValue(s: Session, index: number, value: number, extra: Partial<Session> = {}): Session {
  const writes: CellChange[] = [{ index, value, notes: 0 }];
  const bit = 1 << value;
  for (const peer of peers(index)) {
    if (s.notes[peer] & bit) writes.push({ index: peer, value: s.values[peer], notes: s.notes[peer] & ~bit });
  }
  return commit(s, writes, extra);
}

export function reduce(s: Session, action: Action): Session {
  if (action.type === 'tick') {
    return s.paused || s.completed ? s : { ...s, elapsed: s.elapsed + 1 };
  }
  if (action.type === 'pause') {
    return s.completed ? s : { ...s, paused: action.paused };
  }
  if (s.completed || s.paused) return s;

  switch (action.type) {
    case 'select':
      return { ...s, selected: action.index };

    case 'move': {
      const from = s.selected ?? 40;
      const row = (((from / 9) | 0) + action.dRow + 9) % 9;
      const col = ((from % 9) + action.dCol + 9) % 9;
      return { ...s, selected: row * 9 + col };
    }

    case 'toggleNotes':
      return { ...s, notesMode: !s.notesMode };

    case 'enter': {
      const index = s.selected;
      if (index === null || isGiven(s, index)) return s;
      const { value } = action;

      if (s.notesMode) {
        if (s.values[index] !== 0) return s;
        return commit(s, [{ index, value: 0, notes: s.notes[index] ^ (1 << value) }]);
      }
      // Re-entering the same digit clears it, as in the app.
      if (s.values[index] === value) return commit(s, [{ index, value: 0, notes: 0 }]);

      const mistake = value !== s.solution[index];
      return placeValue(s, index, value, {
        mistakes: s.mistakes + (mistake ? 1 : 0),
        hinted: s.hinted.filter((i) => i !== index),
      });
    }

    case 'erase': {
      const index = s.selected;
      if (index === null || isGiven(s, index)) return s;
      if (s.values[index] === 0 && s.notes[index] === 0) return s;
      return commit(s, [{ index, value: 0, notes: 0 }]);
    }

    case 'undo': {
      const last = s.undo[s.undo.length - 1];
      if (!last) return s;
      const values = s.values.slice();
      const notes = s.notes.slice();
      for (const change of last) {
        values[change.index] = change.value;
        notes[change.index] = change.notes;
      }
      return { ...s, values, notes, undo: s.undo.slice(0, -1), selected: last[0].index };
    }

    case 'hint': {
      if (s.hintsUsed >= HINTS_PER_GAME) return s;
      const hint = findHint(s.values, s.solution);
      if (!hint) return s;
      return placeValue(s, hint.index, hint.value, {
        hintsUsed: s.hintsUsed + 1,
        hinted: [...s.hinted, hint.index],
        selected: hint.index,
      });
    }
  }
}
