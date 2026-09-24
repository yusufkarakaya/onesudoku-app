// Ported verbatim from sudoku-react-native/src/engine/HintEngine.ts — keep in sync.

/**
 * Picks the cell to reveal when the player asks for a hint.
 *
 * A hint should teach, not just fill a square, so the cheapest technique that
 * applies is preferred: a naked single ("this cell can only be a 4") before a
 * hidden single ("only this cell in the row can hold a 4"). Only when neither
 * applies does it fall back to an arbitrary empty cell, which is the honest
 * answer for a position that genuinely needs advanced logic.
 *
 * Cells the player has already filled correctly are skipped; cells they filled
 * *incorrectly* are prime hint targets, since that is where they are stuck.
 */
import type { Grid } from './solver';
import { computeAllCandidates, findHiddenSingles, findNakedSingles } from './techniques';

export type HintReason = 'nakedSingle' | 'hiddenSingle' | 'correction' | 'reveal';

export interface Hint {
  index: number;
  value: number;
  reason: HintReason;
}

/**
 * @param values  The board as the player has it, 0 for empty.
 * @param solution The full solution, used to validate and to reveal.
 */
export function findHint(values: Grid, solution: Grid): Hint | null {
  // A wrong entry blocks every technique below, so fix that first.
  for (let i = 0; i < 81; i++) {
    if (values[i] !== 0 && values[i] !== solution[i]) {
      return { index: i, value: solution[i], reason: 'correction' };
    }
  }

  const empty: number[] = [];
  for (let i = 0; i < 81; i++) {
    if (values[i] === 0) empty.push(i);
  }
  if (empty.length === 0) return null;

  const candidates = computeAllCandidates(values);

  const naked = findNakedSingles(values, candidates);
  if (naked.length > 0) {
    return { index: naked[0].index, value: solution[naked[0].index], reason: 'nakedSingle' };
  }

  const hidden = findHiddenSingles(values, candidates);
  if (hidden.length > 0) {
    return { index: hidden[0].index, value: solution[hidden[0].index], reason: 'hiddenSingle' };
  }

  return { index: empty[0], value: solution[empty[0]], reason: 'reveal' };
}
