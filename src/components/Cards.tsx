import Image from "next/image";
import Link from "next/link";
import type { Product, Project } from "@/lib/data";
import { getCategory } from "@/lib/site";

export function ProductCard({ p, i = 0 }: { p: Product; i?: number }) {
  const c = getCategory(p.category);
  return (
    <Link
      href={`/products/${p.category}/${p.slug}`}
      className="group block overflow-hidden rounded-[22px] border hairline bg-white transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-20px_rgba(20,22,23,0.25)]"
    >
      <div className="skeleton zoom-slow relative aspect-[4/3] overflow-hidden">
        {p.images[0] && (
          <Image
            src={p.images[0]}
            alt={p.title}
            fill
            sizes="(max-width:768px) 100vw, 33vw"
            className="object-cover"
            loading={i > 2 ? "lazy" : undefined}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/25 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        {c && (
          <span className="absolute right-4 top-4 rounded-full bg-paper/90 px-3.5 py-1.5 text-[12px] font-medium backdrop-blur">
            {c.name}
          </span>
        )}
        <span className="absolute bottom-4 left-4 grid h-11 w-11 place-items-center rounded-full bg-white text-ink opacity-0 transition-all duration-500 group-hover:opacity-100">
          <svg viewBox="0 0 24 24" className="h-5 w-5 -scale-x-100" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-[17px] font-bold leading-7">{p.title}</h3>
        <p className="mt-1.5 line-clamp-1 text-sm text-smoke">{p.summary}</p>
      </div>
    </Link>
  );
}

export function ProjectCard({ p }: { p: Project }) {
  const c = getCategory(p.category);
  return (
    <figure className="group relative overflow-hidden rounded-[22px]">
      <div className="skeleton zoom-slow relative aspect-[4/5] overflow-hidden sm:aspect-[3/4]">
        <Image src={p.image} alt={`${p.title} — ${c?.name ?? ""}`} fill sizes="(max-width:768px) 90vw, 33vw" className="object-cover" loading="lazy" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
      <div className="absolute right-4 top-4 flex gap-2">
        {c && <span className="rounded-full bg-white/15 px-3.5 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">{c.name}</span>}
      </div>
      <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
        <p className="font-latin text-[11px] tracking-[0.3em] text-white/60">{p.location}</p>
        <p className="mt-2 text-xl font-bold leading-8">{p.title}</p>
        {p.description && <p className="mt-1 text-sm text-white/70">{p.description}</p>}
      </figcaption>
    </figure>
  );
}

export function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-[22px] border border-dashed border-line bg-white/60 p-14 text-center">
      <p className="text-lg font-medium text-smoke">{text}</p>
      <Link href="/contact" className="mt-5 inline-block rounded-full bg-ink px-6 py-2.5 text-sm text-white">
        مشاوره با ویژن
      </Link>
    </div>
  );
}
