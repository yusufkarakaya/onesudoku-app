// Ported verbatim from sudoku-react-native/src/engine/SudokuSolver.ts — keep in sync.

/**
 * Backtracking solver with an MRV (minimum remaining values) heuristic.
 *
 * Grids are flat arrays of 81 integers where 0 means empty. Candidate order and
 * cell-selection order are load-bearing: the generator's backtracking walks
 * this same order, so any deviation changes which puzzle a given seed produces.
 */

/** A 9x9 grid as 81 cells, row-major, 0 = empty. */
export type Grid = number[];

/**
 * Candidates for a cell, ascending. Empty when the cell is already filled or
 * genuinely has no legal value.
 */
export function getCandidates(board: Grid, index: number): number[] {
  if (board[index] !== 0) return [];

  // Bit i set means value i is already used by a peer.
  let used = 0;

  const row = (index / 9) | 0;
  const col = index % 9;
  const boxRow = ((row / 3) | 0) * 3;
  const boxCol = ((col / 3) | 0) * 3;

  for (let c = 0; c < 9; c++) {
    const val = board[row * 9 + c];
    if (val > 0) used |= 1 << val;
  }
  for (let r = 0; r < 9; r++) {
    const val = board[r * 9 + col];
    if (val > 0) used |= 1 << val;
  }
  for (let r = boxRow; r < boxRow + 3; r++) {
    for (let c = boxCol; c < boxCol + 3; c++) {
      const val = board[r * 9 + c];
      if (val > 0) used |= 1 << val;
    }
  }

  const candidates: number[] = [];
  for (let v = 1; v <= 9; v++) {
    if ((used & (1 << v)) === 0) candidates.push(v);
  }
  return candidates;
}

/** Number of candidates for a cell, without materialising the array. */
function candidateCount(board: Grid, index: number): number {
  let used = 0;
  const row = (index / 9) | 0;
  const col = index % 9;
  const boxRow = ((row / 3) | 0) * 3;
  const boxCol = ((col / 3) | 0) * 3;

  for (let c = 0; c < 9; c++) {
    const val = board[row * 9 + c];
    if (val > 0) used |= 1 << val;
  }
  for (let r = 0; r < 9; r++) {
    const val = board[r * 9 + col];
    if (val > 0) used |= 1 << val;
  }
  for (let r = boxRow; r < boxRow + 3; r++) {
    for (let c = boxCol; c < boxCol + 3; c++) {
      const val = board[r * 9 + c];
      if (val > 0) used |= 1 << val;
    }
  }

  let count = 0;
  for (let v = 1; v <= 9; v++) {
    if ((used & (1 << v)) === 0) count++;
  }
  return count;
}

/**
 * Empty cell with the fewest remaining candidates (MRV heuristic).
 *
 * The two failure modes are reported separately and must stay that way:
 * `SOLVED` means no empty cells are left, `DEAD_END` means some empty cell has
 * no legal candidate. Conflating them makes a dead end look like a solved grid,
 * which silently corrupts both callers below — `solveBacktrack` returns a
 * partially filled board as a "solution", and `countSolutions` counts a failed
 * branch as a success.
 */
const SOLVED = -1;
const DEAD_END = -2;

function findBestEmptyCell(board: Grid): number {
  let bestIndex = SOLVED;
  let minCandidates = 10;

  for (let i = 0; i < 81; i++) {
    if (board[i] !== 0) continue;
    const count = candidateCount(board, i);
    if (count === 0) return DEAD_END;
    if (count < minCandidates) {
      minCandidates = count;
      bestIndex = i;
    }
    // A naked single is the best possible pick; stop looking.
    if (count === 1) return i;
  }
  return bestIndex;
}

function solveBacktrack(board: Grid): boolean {
  const emptyIndex = findBestEmptyCell(board);
  if (emptyIndex === SOLVED) return true;
  if (emptyIndex === DEAD_END) return false;

  const candidates = getCandidates(board, emptyIndex);
  for (const value of candidates) {
    board[emptyIndex] = value;
    if (solveBacktrack(board)) return true;
  }
  board[emptyIndex] = 0;
  return false;
}

/** Solves a copy of the grid. Returns null when unsolvable. */
export function solve(grid: Grid): Grid | null {
  const board = grid.slice();
  return solveBacktrack(board) ? board : null;
}

/**
 * Counts solutions, stopping once `maxCount` is reached.
 *
 * Placing a legal candidate can still strand a *different* cell with nothing
 * left, so dead ends are reached routinely here and must not be counted — that
 * would inflate the count and make a genuinely unique puzzle look ambiguous.
 * Every cell-removal decision in the generator depends on this verdict.
 */
function countSolutions(board: Grid, count: { n: number }, maxCount: number): void {
  if (count.n >= maxCount) return;

  const emptyIndex = findBestEmptyCell(board);
  if (emptyIndex === SOLVED) {
    count.n += 1;
    return;
  }
  if (emptyIndex === DEAD_END) return;

  const candidates = getCandidates(board, emptyIndex);
  for (const value of candidates) {
    board[emptyIndex] = value;
    countSolutions(board, count, maxCount);
    if (count.n >= maxCount) break;
  }
  board[emptyIndex] = 0;
}

/** True when the puzzle has exactly one solution. */
export function hasUniqueSolution(grid: Grid): boolean {
  const board = grid.slice();
  const count = { n: 0 };
  countSolutions(board, count, 2);
  return count.n === 1;
}

/**
 * Uniqueness check with a constraint-propagation pre-pass.
 *
 * Naked singles resolve most cells without backtracking, so the expensive
 * two-solution count only runs on what is genuinely ambiguous. The generator
 * calls this after every batch of removals, which makes it the hottest
 * function in puzzle generation.
 */
export function hasUniqueSolutionFast(grid: Grid): boolean {
  const board = grid.slice();

  // Phase 1: propagate naked singles to a fixed point.
  let changed = true;
  while (changed) {
    changed = false;
    for (let i = 0; i < 81; i++) {
      if (board[i] !== 0) continue;
      const candidates = getCandidates(board, i);
      if (candidates.length === 0) return false; // no solution exists
      if (candidates.length === 1) {
        board[i] = candidates[0];
        changed = true;
      }
    }
  }

  // Phase 2: propagation alone finished the grid.
  if (!board.includes(0)) return true;

  // Phase 3: backtrack over what remains.
  const count = { n: 0 };
  countSolutions(board, count, 2);
  return count.n === 1;
}
