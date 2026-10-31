import Image from "next/image";
import Link from "next/link";
import { CATEGORIES, SITE, px } from "@/lib/site";
import { getProducts, getProjects } from "@/lib/data";
import { ProductCard } from "@/components/Cards";
import { Kicker, Marquee, Reveal } from "@/components/ui";
import Hero from "@/components/Hero";

export default async function Home() {
  const [projects, products] = await Promise.all([getProjects(), getProducts()]);
  const featured = products.slice(0, 3);

  return (
    <>
      <Hero />

      <Marquee items={["پارتیشن شیشه‌ای", "هندریل", "کابین دوش", "درب آلومینیومی", "پنجره دوجداره", "طراحی سفارشی"]} />

      {/* statement */}
      <section className="container-x grid gap-10 py-24 lg:grid-cols-12 lg:py-32">
        <div className="lg:col-span-7">
          <Reveal>
            <Kicker>چرا ویژن؟</Kicker>
            <h2 className="mt-6 text-[clamp(1.8rem,4vw,3rem)] font-extrabold leading-[1.5] tracking-tight">
              ما فقط شیشه نصب نمی‌کنیم؛
              <br />
              <span className="text-smoke">نور را به خانه شما دعوت می‌کنیم.</span>
            </h2>
          </Reveal>
        </div>
        <div className="flex flex-col justify-end lg:col-span-5">
          <Reveal delay={150}>
            <p className="leading-9 text-smoke">
              دوازده سال است که برای صاحب‌خانه‌ها و معماران، پارتیشن، هندریل، کابین دوش، درب و پنجره می‌سازیم؛
              هر قطعه اندازه‌گیری اختصاصی، هر نصب با وسواس میلی‌متری. این صفحه، شوروم ماست — بگردید، انتخاب کنید، تماس بگیرید.
            </p>
            <Link href="/about" className="u-link mt-5 inline-block font-semibold">بیشتر درباره ویژن بدانید</Link>
          </Reveal>
        </div>
      </section>

      {/* categories — editorial index */}
      <section className="border-t hairline bg-cream/60">
        <div className="container-x py-24">
          <Reveal>
            <div className="flex items-end justify-between">
              <div>
                <Kicker>شوروم محصولات</Kicker>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">پنج دنیای شیشه و آلومینیوم</h2>
              </div>
              <Link href="/products" className="u-link hidden font-semibold md:block">همه محصولات</Link>
            </div>
          </Reveal>
          <div className="mt-12">
            {CATEGORIES.map((c, idx) => (
              <Reveal key={c.slug} delay={idx * 60}>
                <Link
                  href={`/products/${c.slug}`}
                  className="cat-row group grid items-center gap-6 border-t hairline py-7 transition last:border-b lg:grid-cols-12"
                >
                  <span className="font-latin text-sm text-smoke lg:col-span-1">{c.num}</span>
                  <span className="lg:col-span-4">
                    <span className="block text-2xl font-extrabold tracking-tight transition-transform duration-500 group-hover:-translate-x-1 md:text-[28px]">
                      {c.name}
                    </span>
                    <span className="font-latin mt-1 block text-[13px] tracking-[0.25em] text-smoke/70">{c.latin}</span>
                  </span>
                  <span className="hidden text-[15px] leading-8 text-smoke lg:col-span-4 lg:block">{c.intro}</span>
                  <span className="cat-img skeleton relative hidden aspect-[16/10] overflow-hidden rounded-[20px] lg:col-span-2 lg:block">
                    <Image src={c.cover} alt={c.name} fill sizes="240px" className="object-cover" loading="lazy" />
                  </span>
                  <span className="flex lg:col-span-1 lg:justify-end">
                    <span className="cat-arrow grid h-12 w-12 place-items-center rounded-full border hairline bg-white">
                      <svg viewBox="0 0 24 24" className="h-5 w-5 -scale-x-100" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
                    </span>
                  </span>
                  <span className="skeleton relative aspect-[16/9] overflow-hidden rounded-2xl lg:hidden">
                    <Image src={c.cover} alt={c.name} fill sizes="100vw" className="object-cover" loading="lazy" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* featured products */}
      <section className="container-x py-24 lg:py-32">
        <Reveal>
          <div className="flex items-end justify-between">
            <div>
              <Kicker>منتخب شوروم</Kicker>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">پیشنهاد این فصل ویژن</h2>
            </div>
            <Link href="/products" className="u-link hidden font-semibold md:block">مشاهده همه</Link>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <ProductCard p={p} i={i} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* craft — dark */}
      <section className="grain relative overflow-hidden bg-pine-deep text-white">
        <div className="container-x grid items-center gap-14 py-24 lg:grid-cols-2 lg:py-32">
          <div>
            <Reveal>
              <Kicker light>استاندارد ویژن</Kicker>
              <h2 className="mt-5 text-3xl font-extrabold leading-snug tracking-tight md:text-[2.6rem] md:leading-[1.5]">
                جزئیاتی که در عکس دیده نمی‌شود،
                <br />
                اما ده سال بعد حس می‌شود.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {[
                ["شیشه سکوریت واقعی", "تمام پنل‌ها سکوریت شرکتی با لبه‌کاری صنعتی؛ بدون موج، بدون خش پنهان."],
                ["یراق استیل ۳۰۴", "لولا، ریل و دستگیره از استیل ضدزنگ؛ نه آبکاری، نه رنگ."],
                ["اندازه‌گیری لیزری", "قبل از ساخت، فضای شما با لیزر اندازه‌گیری می‌شود؛ خطای میلی‌متری، صفر."],
                ["نصب تمیز و گارانتی", "تیم نصب مجرب، تحویل تمیز و پشتیبانی واقعی پس از اجرا."],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={i * 80}>
                  <p className="font-latin text-sm text-brass-soft">0{i + 1}</p>
                  <h3 className="mt-2 font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/60">{d}</p>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={150}>
            <div className="relative">
              <div className="skeleton relative aspect-[4/5] overflow-hidden rounded-[28px]">
                <Image src={px(36710315)} alt="اجرای شیشه و آلومینیوم ویژن در ویلای مدرن" fill sizes="(max-width:1024px) 100vw, 45vw" className="object-cover" loading="lazy" />
              </div>
              <div className="floaty absolute -bottom-6 -right-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl md:-right-8">
                <p className="font-latin text-3xl font-medium">12+</p>
                <p className="mt-1 text-sm text-white/75">سال تجربه اجرا</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* projects — horizontal */}
      <section className="overflow-hidden py-24 lg:py-32">
        <div className="container-x">
          <Reveal>
            <div className="flex items-end justify-between">
              <div>
                <Kicker>نمونه‌کارهای اجراشده</Kicker>
                <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">پروژه‌هایی که به آن‌ها افتخار می‌کنیم</h2>
              </div>
              <Link href="/projects" className="u-link hidden font-semibold md:block">همه نمونه‌کارها</Link>
            </div>
          </Reveal>
        </div>
        <div className="container-x mt-12">
          <div className="h-scroll flex gap-5 overflow-x-auto pb-2">
            {projects.slice(0, 6).map((p) => (
              <figure key={p.id} className="group w-[82vw] shrink-0 sm:w-[380px]">
                <div className="skeleton zoom-slow relative aspect-[4/5] overflow-hidden rounded-[22px]">
                  <Image src={p.image} alt={p.title} fill sizes="380px" className="object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-[12.5px] text-white/65">{p.location}</p>
                    <p className="mt-1.5 text-lg font-bold leading-7">{p.title}</p>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* process */}
      <section className="border-t hairline bg-cream/60">
        <div className="container-x py-24">
          <Reveal>
            <Kicker>مسیر همکاری</Kicker>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl">از تماس اول تا تحویل تمیز</h2>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              ["۰۱", "مشاوره", "تماس یا فرم؛ نیاز شما را می‌شنویم و بهترین گزینه را پیشنهاد می‌دهیم."],
              ["۰۲", "بازدید و اندازه‌گیری", "کارشناس ما می‌آید، فضا را لیزری اندازه می‌گیرد و پیش‌فاکتور می‌دهد."],
              ["۰۳", "ساخت اختصاصی", "شیشه و پروفیل دقیقاً به اندازه فضای شما برش و آماده می‌شود."],
              ["۰۴", "نصب و تحویل", "نصب تمیز در یک روز، بدون دردسر — با گارانتی و پشتیبانی."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 80}>
                <div className="h-full rounded-[22px] border hairline bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/10">
                  <p className="font-latin text-2xl text-brass">{n}</p>
                  <h3 className="mt-3 font-bold">{t}</h3>
                  <p className="mt-2 text-sm leading-7 text-smoke">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-24 lg:py-32">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[32px] bg-pine-deep text-white">
            <Image src={px(13752348)} alt="ویلای مدرن با نمای شیشه‌ای در غروب" fill sizes="100vw" className="object-cover opacity-35" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-l from-pine-deep/70 to-transparent" />
            <div className="relative grid gap-10 p-10 md:p-16 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="font-latin text-sm tracking-[0.3em] text-brass-soft">FREE CONSULTATION</p>
                <h2 className="mt-4 text-3xl font-extrabold leading-snug md:text-4xl md:leading-[1.6]">
                  پروژه بعدی شما،
                  <br />
                  شایسته یک مشاوره دقیق است.
                </h2>
                <p className="mt-4 leading-8 text-white/70">همین امروز تماس بگیرید؛ بازدید و مشاوره اولیه رایگان است.</p>
              </div>
              <div className="flex flex-col gap-4 lg:items-end">
                <a href={`tel:${SITE.phone}`} dir="ltr" className="font-latin text-3xl font-medium tracking-wide md:text-4xl">{SITE.phone}</a>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="rounded-full bg-white px-7 py-3.5 font-semibold text-ink transition hover:bg-brass-soft">ثبت درخواست مشاوره</Link>
                  <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener" className="rounded-full border border-white/30 px-7 py-3.5 transition hover:bg-white/10">واتساپ</a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
