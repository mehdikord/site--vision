import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, SITE } from "@/lib/site";
import { getProduct, getProducts } from "@/lib/data";
import Gallery from "@/components/Gallery";
import { ProductCard } from "@/components/Cards";
import { Kicker, Reveal } from "@/components/ui";

type Params = { category: string; slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return (await getProducts()).map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { category, slug } = await params;
  const p = await getProduct(category, slug);
  if (!p) return {};
  return {
    title: `${p.title} | ${getCategory(category)?.name}`,
    description: p.summary || p.description.slice(0, 155),
    alternates: { canonical: `/products/${category}/${slug}` },
    openGraph: { images: p.images.slice(0, 1) },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { category, slug } = await params;
  const c = getCategory(category);
  const p = await getProduct(category, slug);
  if (!c || !p) notFound();
  const related = (await getProducts(category)).filter((x) => x.id !== p.id).slice(0, 3);
  const specs = p.specs
    .split("\n")
    .filter(Boolean)
    .map((l) => {
      const i = l.indexOf(":");
      return i < 0 ? [l, ""] : [l.slice(0, i), l.slice(i + 1)];
    });
  const ld = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.title,
    description: p.description,
    image: p.images.map((image) => image.startsWith("/") ? new URL(image, SITE.url).href : image),
    category: c.name,
    brand: { "@type": "Brand", name: "Vision" },
  };
  return (
    <div className="container-x py-12 lg:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <nav className="text-[13px] text-smoke">
        <Link href="/products" className="hover:text-ink">محصولات</Link> /{" "}
        <Link href={`/products/${c.slug}`} className="hover:text-ink">{c.name}</Link> / {p.title}
      </nav>

      <div className="mt-8 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <Gallery images={p.images} alt={p.title} slug={p.slug} />
          </Reveal>
        </div>
        <div className="lg:col-span-5">
          <Reveal delay={100}>
            <p className="font-latin text-[12px] tracking-[0.3em] text-brass">{c.latin}</p>
            <h1 className="mt-3 text-3xl font-black leading-snug tracking-tight md:text-4xl md:leading-[1.4]">{p.title}</h1>
            <p className="mt-3 text-[17px] text-smoke">{p.summary}</p>
            <p className="mt-6 leading-9 text-ink/80">{p.description}</p>

            {specs.length > 0 && (
              <div className="mt-8 overflow-hidden rounded-[20px] border hairline bg-white">
                <p className="border-b hairline bg-cream/60 px-6 py-3.5 text-sm font-bold">مشخصات فنی</p>
                <dl className="divide-y divide-[var(--color-line)] px-6 text-[14.5px]">
                  {specs.map(([k, v], i) => (
                    <div key={i} className="flex items-center justify-between gap-4 py-3.5">
                      <dt className="text-smoke">{k}</dt>
                      <dd className="text-left font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            <div className="mt-8 rounded-[20px] bg-pine-deep p-7 text-white">
              <p className="font-bold">این مدل را برای فضای خود می‌خواهید؟</p>
              <p className="mt-1.5 text-sm text-white/65">مشاوره و بازدید اولیه رایگان است.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-bold text-ink transition hover:bg-brass-soft">
                  درخواست مشاوره
                </Link>
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("سلام، درباره " + p.title + " سوال داشتم")}`}
                  target="_blank"
                  rel="noopener"
                  className="rounded-full border border-white/25 px-6 py-3 text-sm transition hover:bg-white/10"
                >
                  پرسش در واتساپ
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-24">
          <Reveal>
            <Kicker>ادامه گشت‌وگذار</Kicker>
            <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">مدل‌های مشابه {c.name}</h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <Reveal key={r.id} delay={i * 80}>
                <ProductCard p={r} i={i} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
