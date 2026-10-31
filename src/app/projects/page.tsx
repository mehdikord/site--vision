import type { Metadata } from "next";
import { getProjects } from "@/lib/data";
import { EmptyState, ProjectCard } from "@/components/Cards";
import { Kicker, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "نمونه‌کارهای اجراشده",
  description: "نمونه‌کارهای اجراشده ویژن در زمینه پارتیشن شیشه‌ای، هندریل، کابین دوش، درب و پنجره.",
  alternates: { canonical: "/projects" },
};

export default async function Projects() {
  const items = await getProjects();
  return (
    <div className="container-x py-14 lg:py-20">
      <Reveal>
        <Kicker>کارنامه ویژن</Kicker>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">نمونه‌کارهای اجراشده</h1>
        <p className="mt-4 max-w-2xl leading-8 text-smoke">
          از دفترهای مدرن تا ویلاهای لوکس؛ هر پروژه با اندازه‌گیری اختصاصی و اجرای میلی‌متری.
        </p>
      </Reveal>
      <div className="mt-12">
        {items.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 80}>
                <ProjectCard p={p} />
              </Reveal>
            ))}
          </div>
        ) : (
          <EmptyState text="نمونه‌کاری ثبت نشده است." />
        )}
      </div>
    </div>
  );
}
