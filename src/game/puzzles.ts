/**
 * Serves classic puzzles from the pool the app ships (`public/puzzles/*.json`,
 * copied from sudoku-react-native/assets/puzzles — 1000 verified, uniquely
 * solvable puzzles per difficulty). Mirrors the app's `PuzzlePool.ts`: only the
 * puzzle is stored, the solution is re-derived by `solve()` in about a
 * millisecond.
 *
 * Each browser walks the pool from its own random starting point, so two
 * visitors rarely share a puzzle and one visitor does not repeat until they
 * have played all thousand.
 */
import type { Difficulty } from './difficulty';
import { solve, type Grid } from './engine/solver';
import { readJson, writeJson } from './storage';

export interface LoadedPuzzle {
  puzzleId: string;
  givens: Grid;
  solution: Grid;
}

const POOL_SIZE_FALLBACK = 1000;
const CURSOR_KEY = 'cursor';

const pools: Partial<Record<Difficulty, Promise<readonly string[]>>> = {};

function pool(difficulty: Difficulty): Promise<readonly string[]> {
  pools[difficulty] ??= fetch(`/puzzles/${difficulty}.json`).then((response) => {
    if (!response.ok) throw new Error(`puzzle pool ${difficulty}: ${response.status}`);
    return response.json() as Promise<string[]>;
  });
  // A failed fetch must not poison every later attempt.
  pools[difficulty]!.catch(() => delete pools[difficulty]);
  return pools[difficulty]!;
}

function nextIndex(difficulty: Difficulty, size: number): number {
  const cursors = readJson<Partial<Record<Difficulty, number>>>(CURSOR_KEY) ?? {};
  const current = cursors[difficulty] ?? Math.floor(Math.random() * size);
  cursors[difficulty] = (current + 1) % size;
  writeJson(CURSOR_KEY, cursors);
  return current % size;
}

export async function loadClassicPuzzle(difficulty: Difficulty): Promise<LoadedPuzzle> {
  const entries = await pool(difficulty);
  const index = nextIndex(difficulty, entries.length || POOL_SIZE_FALLBACK);
  const givens = Array.from(entries[index], (ch) => ch.charCodeAt(0) - 48);
  const solution = solve(givens);
  if (!solution) throw new Error(`puzzle ${difficulty}#${index} has no solution`);
  return { puzzleId: `${difficulty}-${index}`, givens, solution };
}
