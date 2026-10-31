"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { trackProductView } from "@/lib/track";

export default function Gallery({ images, alt, slug }: { images: string[]; alt: string; slug: string }) {
  const [i, setI] = useState(0);
  useEffect(() => trackProductView(slug), [slug]);
  if (!images.length) return <div className="skeleton aspect-[4/3] rounded-[24px]" />;
  return (
    <div>
      <div className="skeleton relative aspect-[4/3] overflow-hidden rounded-[24px] border hairline">
        <Image
          key={images[i]}
          src={images[i]}
          alt={`${alt} — تصویر ${i + 1}`}
          fill
          priority={i === 0}
          sizes="(max-width:1024px) 100vw, 58vw"
          className="object-cover"
        />
        <span className="absolute bottom-4 left-4 rounded-full bg-ink/60 px-3.5 py-1.5 text-[12px] text-white backdrop-blur">
          {i + 1} / {images.length}
        </span>
        {images.length > 1 && (
          <>
            <button
              onClick={() => setI((i - 1 + images.length) % images.length)}
              aria-label="تصویر قبلی"
              className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 backdrop-blur transition hover:bg-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 6 6 6-6 6" /></svg>
            </button>
            <button
              onClick={() => setI((i + 1) % images.length)}
              aria-label="تصویر بعدی"
              className="absolute left-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/90 backdrop-blur transition hover:bg-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 6-6 6 6 6" /></svg>
            </button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
          {images.map((src, idx) => (
            <button
              key={src + idx}
              onClick={() => setI(idx)}
              aria-label={`تصویر ${idx + 1}`}
              className={`relative h-[76px] w-28 shrink-0 overflow-hidden rounded-2xl border transition-all duration-300 ${
                idx === i ? "border-ink ring-2 ring-ink/20" : "border-line opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={src} alt="" fill sizes="112px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
