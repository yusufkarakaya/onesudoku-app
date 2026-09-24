/**
 * An AdSense unit inside the game island (the completion sheet). Static page
 * slots use components/AdSlot.astro; both render nothing until
 * PUBLIC_ADSENSE_CLIENT and the slot id are configured.
 */
import { useEffect, useRef } from 'preact/hooks';

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

const client = import.meta.env.PUBLIC_ADSENSE_CLIENT as string | undefined;

export function AdSlot({ slot, minHeight = 250 }: { slot: string | undefined; minHeight?: number }) {
  const ref = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (!client || !slot || !ref.current || ref.current.dataset.adsbygoogleStatus) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // An ad failing to fill must never affect the game.
    }
  }, [slot]);

  if (!client || !slot) return null;
  return (
    <div style={{ minHeight: minHeight + 18 }}>
      <div class="ad-label">Advertisement</div>
      <ins
        ref={ref}
        class="adsbygoogle ad-slot"
        style={{ display: 'block', minHeight }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
