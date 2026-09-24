/**
 * Game events, sent to GA4 when PUBLIC_GA_ID is set — the same sink as the
 * store-click handler in components/Analytics.astro. Without it, a no-op.
 */
type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(name: string, params: Params = {}): void {
  try {
    window.gtag?.('event', name, params);
  } catch {
    // Analytics must never break play.
  }
}
