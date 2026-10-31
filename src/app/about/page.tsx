import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { px } from "@/lib/site";
import { Kicker, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "درباره ما",
  description: "ویژن، مجموعه طراحی و اجرای سازه‌های شیشه‌ای و آلومینیومی برای صاحبان خانه و معماران.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <>
      <div className="container-x grid items-center gap-12 py-14 lg:grid-cols-2 lg:py-24">
        <div>
          <Reveal>
            <Kicker>داستان ما</Kicker>
            <h1 className="mt-4 text-4xl font-black leading-[1.4] tracking-tight md:text-5xl md:leading-[1.4]">
              ویژن؛ آتلیه شیشه و آلومینیوم
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 leading-9 text-ink/80">
              ویژن از یک کارگاه کوچک شروع شد با یک باور ساده: شیشه، اگر درست انتخاب و درست نصب شود،
              یک خانه را متحول می‌کند. امروز — دوازده سال بعد — صدها دفتر، ویلا، کلینیک و آپارتمان با امضای ما نور گرفته‌اند.
            </p>
            <p className="mt-4 leading-9 text-ink/80">
              ما برای صاحب‌خانه‌هایی کار می‌کنیم که به جزئیات اهمیت می‌دهند، و برای معمارانی که به مجری دقیق نیاز دارند.
              از مشاوره و اندازه‌گیری لیزری تا نصب تمیز و پشتیبانی، یک تیم پاسخ‌گوست: خودمان.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t hairline pt-8">
              {[["+۲۵۰", "پروژه"], ["۱۲", "سال تجربه"], ["۹۸٪", "رضایت مشتری"]].map(([n, l]) => (
                <div key={l}>
                  <p className="font-latin text-3xl font-medium">{n}</p>
                  <p className="mt-1 text-sm text-smoke">{l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={150}>
          <div className="grid gap-5">
            <div className="skeleton relative aspect-[16/11] overflow-hidden rounded-[26px]">
              <Image src={px(7018824)} alt="فضای داخلی اجرا شده توسط ویژن" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="skeleton relative aspect-square overflow-hidden rounded-[26px]">
                <Image src={px(6580239)} alt="نشیمن با پنجره‌های قدی" fill sizes="25vw" className="object-cover" loading="lazy" />
              </div>
              <div className="flex flex-col justify-center rounded-[26px] bg-pine-deep p-7 text-white">
                <p className="font-latin text-sm tracking-[0.25em] text-brass-soft">PROMISE</p>
                <p className="mt-3 text-lg font-bold leading-8">«اگر از نصب راضی نبودید، برمی‌گردیم و درستش می‌کنیم.»</p>
                <p className="mt-3 text-sm text-white/60">— تیم ویژن</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="border-t hairline bg-cream/60">
        <div className="container-x grid gap-5 py-16 md:grid-cols-3">
          {[
            ["شفافیت در قیمت", "پیش‌فاکتور دقیق قبل از شروع؛ بدون هزینه پنهان، بدون سورپرایز."],
            ["احترام به خانه شما", "نصب تمیز، جمع‌کردن کامل و تحویل بدون دردسر — انگار مهمان بودیم."],
            ["همراهی با معماران", "اجرای دقیق نقشه‌های شما، با گزارش مرحله‌به‌مرحله و زمان‌بندی متعهد."],
          ].map(([t, d], i) => (
            <Reveal key={t} delay={i * 80}>
              <div className="h-full rounded-[22px] border hairline bg-white p-8">
                <h3 className="font-bold">{t}</h3>
                <p className="mt-2 text-sm leading-7 text-smoke">{d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="container-x py-16 text-center">
        <Reveal>
          <h2 className="text-2xl font-extrabold md:text-3xl">بیایید درباره پروژه شما صحبت کنیم</h2>
          <Link href="/contact" className="mt-6 inline-block rounded-full bg-ink px-8 py-3.5 font-semibold text-white transition hover:bg-pine">
            تماس با ویژن
          </Link>
        </Reveal>
      </div>
    </>
  );
}
