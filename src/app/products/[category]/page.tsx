import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES, getCategory } from "@/lib/site";
import { getProducts, getProjects } from "@/lib/data";
import { EmptyState, ProductCard, ProjectCard } from "@/components/Cards";
import { Kicker, Reveal } from "@/components/ui";

type Params = { category: string };

export function generateStaticParams(): Params[] {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const c = getCategory((await params).category);
  if (!c) return {};
  return {
    title: c.title,
    description: c.description,
    alternates: { canonical: `/products/${c.slug}` },
    openGraph: { images: [c.cover] },
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const c = getCategory((await params).category);
  if (!c) notFound();
  const [items, projects] = await Promise.all([getProducts(c.slug), getProjects(c.slug)]);
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "محصولات", item: "/products" },
      { "@type": "ListItem", position: 2, name: c.name, item: `/products/${c.slug}` },
    ],
  };
  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src={c.cover} alt={c.name} fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-l from-pine-deep/90 via-pine-deep/60 to-pine-deep/25" />
        </div>
        <div className="container-x relative py-20 text-white lg:py-28">
          <nav className="text-[13px] text-white/60">
            <Link href="/products" className="hover:text-white">محصولات</Link> / {c.name}
          </nav>
          <p className="font-latin mt-6 text-sm tracking-[0.35em] text-brass-soft">{c.latin}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-6xl">{c.name}</h1>
          <p className="mt-5 max-w-2xl leading-9 text-white/75">{c.intro}</p>
        </div>
      </div>

      <div className="container-x py-14 lg:py-20">
        <Reveal>
          <Kicker>مدل‌ها</Kicker>
          <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">انتخاب کنید، ما می‌سازیم</h2>
        </Reveal>
        <div className="mt-10">
          {items.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((p, i) => (
                <Reveal key={p.id} delay={(i % 3) * 80}>
                  <ProductCard p={p} i={i} />
                </Reveal>
              ))}
            </div>
          ) : (
            <EmptyState text="هنوز محصولی در این دسته ثبت نشده است." />
          )}
        </div>

        {projects.length > 0 && (
          <section className="mt-24">
            <Reveal>
              <Kicker>در دنیای واقعی</Kicker>
              <h2 className="mt-3 text-2xl font-extrabold md:text-3xl">نمونه‌کارهای {c.name}</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {projects.slice(0, 3).map((p, i) => (
                <Reveal key={p.id} delay={i * 80}>
                  <ProjectCard p={p} />
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
