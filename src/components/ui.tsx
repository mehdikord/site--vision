"use client";
import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ "--d": `${delay}ms` } as React.CSSProperties}>
      {children}
    </div>
  );
}

export function Kicker({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-[13px] font-medium tracking-wide ${light ? "text-brass-soft" : "text-brass"}`}>
      <span className={`h-px w-10 ${light ? "bg-brass-soft" : "bg-brass"}`} />
      {children}
    </p>
  );
}

export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden border-y border-white/10 bg-pine-deep py-5" dir="ltr">
      <div className="marquee-track items-center gap-10" dir="rtl">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center gap-10" aria-hidden={half === 1}>
            {row.map((t, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                <span className="text-lg font-medium text-white/90">{t}</span>
                <span className="font-latin text-sm text-brass-soft">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
