"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CATEGORIES, SITE } from "@/lib/site";

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3">
      <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-xl bg-ink text-white">
        <span className="font-latin text-xl font-semibold leading-none">V</span>
        <span className="absolute inset-x-0 bottom-0 h-[3px] bg-brass transition-all duration-500 group-hover:h-1.5" />
      </span>
      <span className="leading-tight">
        <span className={`block text-[19px] font-800 font-extrabold tracking-tight ${dark ? "text-white" : "text-ink"}`}>ویژن</span>
        <span className={`font-latin block text-[10px] tracking-[0.42em] ${dark ? "text-white/60" : "text-smoke"}`}>VISION</span>
      </span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <div className="hidden bg-pine-deep text-[12.5px] text-white/75 md:block">
        <div className="container-x flex h-9 items-center justify-between">
          <p>{SITE.tagline} — شوروم آنلاین محصولات شیشه و آلومینیوم</p>
          <div className="flex items-center gap-5">
            <span>{SITE.hours}</span>
            <a href={`tel:${SITE.phone}`} dir="ltr" className="font-latin tracking-wider text-brass-soft">{SITE.phone}</a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-paper/85 shadow-[0_1px_0_var(--color-line)] backdrop-blur-xl" : "bg-paper"
        }`}
      >
        <div className="container-x flex h-[76px] items-center justify-between gap-6">
          <Logo />
          <nav className="hidden items-center gap-7 text-[14.5px] font-medium text-ink/80 xl:flex">
            <div className="group relative">
              <Link href="/products" className="u-link flex items-center gap-1.5 py-2">
                محصولات
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 opacity-60" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 9 6 6 6-6" /></svg>
              </Link>
              <div className="invisible absolute right-0 top-full w-60 translate-y-2 rounded-2xl border hairline bg-white p-2 opacity-0 shadow-2xl shadow-ink/10 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                {CATEGORIES.map((c) => (
                  <Link key={c.slug} href={`/products/${c.slug}`} className="flex items-center justify-between rounded-xl px-4 py-2.5 hover:bg-cream">
                    <span>{c.name}</span>
                    <span className="font-latin text-[11px] text-smoke">{c.latin}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link href="/projects" className="u-link">نمونه‌کارها</Link>
            <Link href="/about" className="u-link">درباره ما</Link>
            <Link href="/contact" className="u-link">تماس</Link>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="hidden items-center gap-2 rounded-full border hairline bg-white px-4 py-2.5 text-sm font-semibold transition hover:border-ink lg:flex"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" /></svg>
              <span dir="ltr">{SITE.phone}</span>
            </a>
            <Link href="/contact" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-pine sm:block">
              دریافت مشاوره
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="منو"
              className="grid h-11 w-11 place-items-center rounded-full border hairline bg-white xl:hidden"
            >
              <span className="relative block h-3.5 w-5">
                <span className={`absolute inset-x-0 top-0 h-[2px] bg-ink transition-all ${open ? "top-1.5 rotate-45" : ""}`} />
                <span className={`absolute inset-x-0 top-1.5 h-[2px] bg-ink transition-all ${open ? "opacity-0" : ""}`} />
                <span className={`absolute inset-x-0 top-3 h-[2px] bg-ink transition-all ${open ? "top-1.5 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-pine-deep text-white transition-all duration-500 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="container-x flex h-full flex-col justify-center gap-1 pt-20">
          {[{ h: "/", t: "خانه" }, ...CATEGORIES.map((c) => ({ h: `/products/${c.slug}`, t: c.name })), { h: "/projects", t: "نمونه‌کارها" }, { h: "/about", t: "درباره ما" }, { h: "/contact", t: "تماس با ما" }].map((l, i) => (
            <Link
              key={l.h + i}
              href={l.h}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              className={`border-b border-white/10 py-4 text-2xl font-bold transition-all duration-500 ${
                open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
            >
              {l.t}
            </Link>
          ))}
          <a href={`tel:${SITE.phone}`} className="font-latin mt-8 text-xl text-brass-soft" dir="ltr">{SITE.phone}</a>
        </div>
      </div>
    </>
  );
}
