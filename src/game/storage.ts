/**
 * localStorage wrapped so a private window, blocked storage or a full quota
 * degrades to "nothing remembered" instead of breaking the game.
 */
const PREFIX = 'onesudoku.play.v1.';

export function readJson<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw === null ? null : (JSON.parse(raw) as T);
  } catch {
    return null;
  }
}

export function writeJson(key: string, value: unknown): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch {
    // Storage unavailable — the game still works, it just will not resume.
  }
}

export function remove(key: string): void {
  try {
    localStorage.removeItem(PREFIX + key);
  } catch {
    // ignore
  }
}
