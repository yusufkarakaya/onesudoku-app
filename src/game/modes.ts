/**
 * Every way to play on /play.
 *
 * A mode owns how its puzzle is produced; the board, pad and controls are
 * shared. Adding one means an entry here plus a `loadPuzzle` — flip
 * `available` once it is playable and the chip in the mode row lights up.
 */
import type { Difficulty } from './difficulty';
import { loadClassicPuzzle, type LoadedPuzzle } from './puzzles';

export type ModeId = 'classic' | 'killer' | 'daily';

export interface GameMode {
  id: ModeId;
  name: string;
  available: boolean;
  loadPuzzle?: (difficulty: Difficulty) => Promise<LoadedPuzzle>;
}

export const MODES: readonly GameMode[] = [
  { id: 'classic', name: 'Classic', available: true, loadPuzzle: loadClassicPuzzle },
  { id: 'killer', name: 'Killer', available: false },
  { id: 'daily', name: 'Daily', available: false },
];

export function modeById(id: ModeId): GameMode {
  return MODES.find((mode) => mode.id === id) ?? MODES[0];
}
