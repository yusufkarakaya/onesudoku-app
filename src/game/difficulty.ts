/** Mirrors sudoku-react-native/src/models/Difficulty.ts. */
export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';

export const DIFFICULTIES: readonly Difficulty[] = ['easy', 'medium', 'hard', 'expert'];

export function isDifficulty(value: unknown): value is Difficulty {
  return typeof value === 'string' && (DIFFICULTIES as readonly string[]).includes(value);
}

export function displayName(difficulty: Difficulty): string {
  return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
}
