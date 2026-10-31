import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";
import { Kicker, Reveal } from "@/components/ui";

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "تماس با ویژن برای مشاوره رایگان پارتیشن، هندریل، کابین دوش، درب و پنجره — تلفن، واتساپ و اینستاگرام.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  const channels = [
    { t: "تلفن شوروم", v: SITE.phone, h: `tel:${SITE.phone}`, latin: true },
    { t: "موبایل و واتساپ", v: SITE.mobile, h: `https://wa.me/${SITE.whatsapp}`, latin: true },
    { t: "اینستاگرام", v: `@${SITE.instagram}`, h: `https://instagram.com/${SITE.instagram}`, latin: true },
  ];
  return (
    <div className="container-x py-14 lg:py-20">
      <Reveal>
        <Kicker>در ارتباط باشیم</Kicker>
        <h1 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">تماس با ویژن</h1>
        <p className="mt-4 max-w-2xl leading-8 text-smoke">
          فرم را پر کنید یا مستقیم پیام بدهید؛ مشاوره اولیه و بازدید، رایگان است.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="space-y-4">
            {channels.map((c) => (
              <a
                key={c.t}
                href={c.h}
                target={c.h.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
                className="group flex items-center justify-between rounded-[20px] border hairline bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ink/10"
              >
                <span>
                  <span className="block text-sm text-smoke">{c.t}</span>
                  <span className={`mt-1 block text-lg font-bold ${c.latin ? "font-latin tracking-wide" : ""}`} dir="ltr">{c.v}</span>
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-cream transition group-hover:bg-ink group-hover:text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 -scale-x-100" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
                </span>
              </a>
            ))}
            <div className="rounded-[20px] bg-pine-deep p-7 text-white">
              <p className="font-bold">نشانی شوروم</p>
              <p className="mt-2 text-white/70">{SITE.address}</p>
              <p className="mt-1 text-white/70">{SITE.hours}</p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7">
          <div className="rounded-[26px] border hairline bg-white p-7 md:p-10">
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
