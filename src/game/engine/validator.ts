/**
 * `findConflicts` from sudoku-react-native/src/engine/SudokuValidator.ts,
 * without the Killer cage parameter the web game has no use for yet.
 */

/**
 * Every cell that shares a row, column or box with a cell of the same value.
 * Both (or all) participants of a duplicate are reported.
 */
export function findConflicts(values: ArrayLike<number>): Set<number> {
  const conflicts = new Set<number>();

  const scan = (group: number[]) => {
    const positionsByValue: number[][] = [];
    for (const id of group) {
      const value = values[id];
      if (!value) continue;
      (positionsByValue[value] ??= []).push(id);
    }
    for (const ids of positionsByValue) {
      if (ids && ids.length > 1) {
        for (const id of ids) conflicts.add(id);
      }
    }
  };

  for (let row = 0; row < 9; row++) {
    scan(Array.from({ length: 9 }, (_, c) => row * 9 + c));
  }
  for (let col = 0; col < 9; col++) {
    scan(Array.from({ length: 9 }, (_, r) => r * 9 + col));
  }
  for (let box = 0; box < 9; box++) {
    const boxRow = ((box / 3) | 0) * 3;
    const boxCol = (box % 3) * 3;
    const group: number[] = [];
    for (let r = boxRow; r < boxRow + 3; r++) {
      for (let c = boxCol; c < boxCol + 3; c++) group.push(r * 9 + c);
    }
    scan(group);
  }

  return conflicts;
}
