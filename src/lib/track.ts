type W = Window & { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };

export function track(event: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const w = window as W;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, ...params });
  w.gtag?.("event", event, params);
}

export function trackProductView(slug: string) {
  if (typeof window === "undefined") return;
  const key = "vision_viewed";
  const seen: string[] = JSON.parse(sessionStorage.getItem(key) || "[]");
  if (!seen.includes(slug)) seen.push(slug);
  sessionStorage.setItem(key, JSON.stringify(seen));
  track("product_view", { slug, products_viewed: seen.length });
}
