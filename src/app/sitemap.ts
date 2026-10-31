import type { MetadataRoute } from "next";
import { CATEGORIES, SITE } from "@/lib/site";
import { getProducts } from "@/lib/data";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const u = (p: string) => `${SITE.url}${p}`;
  const products = await getProducts();
  return [
    { url: u("/"), priority: 1 },
    { url: u("/products"), priority: 0.9 },
    ...CATEGORIES.map((c) => ({ url: u(`/products/${c.slug}`), priority: 0.9 })),
    ...products.map((p) => ({ url: u(`/products/${p.category}/${p.slug}`), priority: 0.8 })),
    { url: u("/projects"), priority: 0.7 },
    { url: u("/about"), priority: 0.5 },
    { url: u("/contact"), priority: 0.6 },
  ];
}
