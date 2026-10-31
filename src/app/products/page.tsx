import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/lib/site";
import { Kicker, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "محصولات — پارتیشن، هندریل، کابین دوش، درب و پنجره",
  description: "دسته‌بندی محصولات ویژن: پارتیشن شیشه‌ای، هندریل، کابین دوش، درب و پنجره آلومینیومی.",
  alternates: { canonical: "/products" },
};

export default function Products() {
  return (
    <div className="container-x py-14 lg:py-20">
      <Reveal>
        <Kicker>شوروم ویژن</Kicker>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">محصولات</h1>
        <p className="mt-4 max-w-2xl leading-8 text-smoke">
          هر دسته، دنیای خودش را دارد. وارد شوید، مدل‌ها را ببینید و برای جزئیات فنی با ما در تماس باشید.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {CATEGORIES.map((c, i) => (
          <Reveal key={c.slug} delay={(i % 2) * 80}>
            <Link
              href={`/products/${c.slug}`}
              className={`group relative block overflow-hidden rounded-[26px] ${i === 0 ? "md:col-span-2 aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"}`}
            >
              <Image src={c.cover} alt={c.name} fill sizes={i === 0 ? "100vw" : "50vw"} className="object-cover transition duration-[1.2s] group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-7 text-white md:p-9">
                <div>
                  <p className="font-latin text-[12px] tracking-[0.3em] text-white/60">{c.latin}</p>
                  <h2 className="mt-2 text-2xl font-extrabold md:text-3xl">{c.name}</h2>
                  <p className="mt-2 max-w-lg text-sm leading-7 text-white/70">{c.intro}</p>
                </div>
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-white/15 p-3.5 backdrop-blur transition group-hover:bg-white group-hover:text-ink">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 -scale-x-100" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
