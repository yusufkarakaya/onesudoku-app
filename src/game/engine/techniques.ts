/**
 * The subset of sudoku-react-native/src/engine/SolvingTechniques.ts the web
 * game needs: geometry, candidates, and the two singles the hint engine uses.
 * The grader's advanced techniques stay in the app. Keep in sync.
 */

import { getCandidates, type Grid } from './solver';

export interface CellPlacement {
  index: number;
  value: number;
}

/** Per-cell candidate lists, ascending. Filled cells hold an empty array. */
export type Candidates = number[][];

// MARK: - Geometry (precomputed once)

const BOX_CELLS: readonly number[][] = (() => {
  const boxes: number[][] = [];
  for (let box = 0; box < 9; box++) {
    const boxRow = ((box / 3) | 0) * 3;
    const boxCol = (box % 3) * 3;
    const cells: number[] = [];
    for (let r = boxRow; r < boxRow + 3; r++) {
      for (let c = boxCol; c < boxCol + 3; c++) cells.push(r * 9 + c);
    }
    boxes.push(cells);
  }
  return boxes;
})();

/** All 27 houses: 9 rows, then 9 columns, then 9 boxes. Order is significant. */
const ALL_HOUSES: readonly number[][] = (() => {
  const houses: number[][] = [];
  for (let row = 0; row < 9; row++) {
    houses.push(Array.from({ length: 9 }, (_, c) => row * 9 + c));
  }
  for (let col = 0; col < 9; col++) {
    houses.push(Array.from({ length: 9 }, (_, r) => r * 9 + col));
  }
  return houses.concat(BOX_CELLS.map((cells) => cells));
})();

/** The 20 peers of each cell (row ∪ column ∪ box, excluding itself), ascending. */
const PEERS: readonly number[][] = (() => {
  const all: number[][] = [];
  for (let index = 0; index < 81; index++) {
    const row = (index / 9) | 0;
    const col = index % 9;
    const boxRow = ((row / 3) | 0) * 3;
    const boxCol = ((col / 3) | 0) * 3;
    const set = new Set<number>();
    for (let c = 0; c < 9; c++) set.add(row * 9 + c);
    for (let r = 0; r < 9; r++) set.add(r * 9 + col);
    for (let r = boxRow; r < boxRow + 3; r++) {
      for (let c = boxCol; c < boxCol + 3; c++) set.add(r * 9 + c);
    }
    set.delete(index);
    all.push([...set].sort((a, b) => a - b));
  }
  return all;
})();

export function peers(index: number): readonly number[] {
  return PEERS[index];
}

export function computeAllCandidates(grid: Grid): Candidates {
  const candidates: Candidates = new Array(81);
  for (let i = 0; i < 81; i++) {
    candidates[i] = grid[i] === 0 ? getCandidates(grid, i) : [];
  }
  return candidates;
}

// MARK: - 1. Naked Single

/** A cell with exactly one remaining candidate. */
export function findNakedSingles(grid: Grid, candidates: Candidates): CellPlacement[] {
  const results: CellPlacement[] = [];
  for (let i = 0; i < 81; i++) {
    if (grid[i] !== 0) continue;
    if (candidates[i].length === 1) {
      results.push({ index: i, value: candidates[i][0] });
    }
  }
  return results;
}

// MARK: - 2. Hidden Single

/** A value with exactly one possible cell in some house. */
export function findHiddenSingles(grid: Grid, candidates: Candidates): CellPlacement[] {
  const results: CellPlacement[] = [];
  const found = new Set<number>();

  for (const house of ALL_HOUSES) {
    for (let value = 1; value <= 9; value++) {
      let onlyCell = -1;
      let count = 0;
      for (const idx of house) {
        if (grid[idx] === 0 && candidates[idx].includes(value)) {
          onlyCell = idx;
          if (++count > 1) break;
        }
      }
      // At most one placement per cell per pass: two houses can both nominate
      // the same cell, and applying it twice would double-count the technique.
      if (count === 1 && !found.has(onlyCell)) {
        results.push({ index: onlyCell, value });
        found.add(onlyCell);
      }
    }
  }
  return results;
}

