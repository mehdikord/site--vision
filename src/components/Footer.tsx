import Link from "next/link";
import { CATEGORIES, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="grain relative mt-0 overflow-hidden bg-pine-deep text-white">
      <div className="container-x grid gap-12 pb-16 pt-20 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink">
              <span className="font-latin text-2xl font-semibold">V</span>
            </span>
            <span>
              <span className="block text-2xl font-extrabold">ویژن</span>
              <span className="font-latin block text-[11px] tracking-[0.42em] text-white/50">VISION — GLASS ATELIER</span>
            </span>
          </div>
          <p className="mt-6 max-w-sm leading-8 text-white/65">
            طراحی و اجرای پارتیشن، هندریل، کابین دوش، درب و پنجره؛ برای خانه‌هایی که دوستشان دارید و پروژه‌هایی که امضای شماست.
          </p>
          <div className="mt-8 flex gap-3">
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener" className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-brass-soft hover:text-brass-soft">واتساپ</a>
            <a href={`https://instagram.com/${SITE.instagram}`} target="_blank" rel="noopener" className="rounded-full border border-white/15 px-5 py-2.5 text-sm transition hover:border-brass-soft hover:text-brass-soft">اینستاگرام</a>
            <a href={`tel:${SITE.phone}`} className="rounded-full bg-brass px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brass-soft hover:text-ink">تماس</a>
          </div>
        </div>
        <div className="lg:col-span-3">
          <p className="text-sm font-semibold tracking-wide text-brass-soft">محصولات</p>
          <ul className="mt-5 space-y-3 text-white/70">
            {CATEGORIES.map((c) => (
              <li key={c.slug}>
                <Link href={`/products/${c.slug}`} className="group flex items-center gap-2 transition hover:text-white">
                  {c.name}
                  <span className="font-latin text-[11px] text-white/30 transition group-hover:text-brass-soft">{c.latin}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-4">
          <p className="text-sm font-semibold tracking-wide text-brass-soft">دسترسی سریع</p>
          <ul className="mt-5 space-y-3 text-white/70">
            <li><Link href="/projects" className="transition hover:text-white">نمونه‌کارهای اجراشده</Link></li>
            <li><Link href="/about" className="transition hover:text-white">درباره ویژن</Link></li>
            <li><Link href="/contact" className="transition hover:text-white">تماس و مشاوره</Link></li>
          </ul>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/65">
            <p>{SITE.address}</p>
            <p>{SITE.hours}</p>
            <p className="font-latin mt-1 text-base text-white" dir="ltr">{SITE.phone}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-[12.5px] text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} ویژن — تمامی حقوق محفوظ است.</p>
          <p className="font-latin tracking-[0.3em]">DESIGNED FOR LIGHT</p>
        </div>
      </div>
    </footer>
  );
}
