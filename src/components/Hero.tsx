"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { HERO } from "@/lib/site";

const STATS = [
  ["+۲۵۰", "پروژه اجراشده"],
  ["۱۲ سال", "تجربه اجرا"],
  ["۵", "دسته محصول تخصصی"],
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % HERO.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="grain relative overflow-hidden bg-pine-deep text-white">
      {HERO.map((src, idx) => (
        <div key={src} className={`hero-slide absolute inset-0 ${idx === i ? "on" : ""}`}>
          <Image
            src={src}
            alt="شوروم ویژن — فضای مدرن با شیشه و آلومینیوم"
            fill
            priority={idx === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-l from-pine-deep/90 via-pine-deep/45 to-pine-deep/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-deep/85 via-transparent to-pine-deep/30" />

      <div className="container-x relative flex min-h-[92svh] flex-col justify-end pb-14 pt-28">
        <div className="max-w-3xl">
          <p className="flex items-center gap-3 text-sm font-medium text-brass-soft">
            <span className="h-px w-12 bg-brass-soft" />
            شوروم آنلاین ویژن — از ۱۳۹۲
          </p>
          <h1 className="mt-6 text-[clamp(2.6rem,7vw,5.2rem)] font-black leading-[1.15] tracking-tight">
            فضاهایی از جنس
            <br />
            <span className="font-latin font-medium italic text-brass-soft">نور</span>
            {" "}و شیشه
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-9 text-white/75">
            پارتیشن، هندریل، کابین دوش، درب و پنجره؛ طراحی و اجرا برای خانه‌ها و پروژه‌های معماری — با متریال درجه‌یک و نصبی بی‌نقص.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/products"
              className="group flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-ink transition hover:bg-brass-soft"
            >
              ورود به شوروم
              <svg viewBox="0 0 24 24" className="h-4 w-4 -scale-x-100 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </Link>
            <Link href="/projects" className="rounded-full border border-white/30 px-7 py-3.5 font-medium text-white backdrop-blur transition hover:border-white hover:bg-white/10">
              دیدن نمونه‌کارها
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-8 border-t border-white/15 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex gap-10">
            {STATS.map(([n, l]) => (
              <div key={l}>
                <p className="font-latin text-3xl font-medium text-white md:text-4xl">{n}</p>
                <p className="mt-1.5 text-sm text-white/60">{l}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {HERO.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`اسلاید ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-12 bg-brass-soft" : "w-6 bg-white/25 hover:bg-white/50"}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-1/2 top-24 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="grid h-10 w-6 place-items-start justify-center rounded-full border border-white/25 p-1.5">
          <span className="scroll-dot h-2 w-2 rounded-full bg-white" />
        </span>
      </div>
    </section>
  );
}
