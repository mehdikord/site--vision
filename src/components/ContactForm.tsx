"use client";
import { useActionState, useEffect } from "react";
import { CATEGORIES } from "@/lib/site";
import { track } from "@/lib/track";

type FormState = { ok?: boolean; error?: string };

// Static site: the form is validated in the browser and nothing is sent or stored.
function sendMessage(_: FormState, fd: FormData): FormState {
  const name = String(fd.get("name") || "").trim();
  const phone = String(fd.get("phone") || "").trim().replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));
  if (fd.get("website")) return { ok: true }; // honeypot
  if (name.length < 2) return { error: "لطفاً نام خود را وارد کنید." };
  if (!/^09\d{9}$/.test(phone)) return { error: "شماره موبایل معتبر نیست (مثال: ۰۹۱۲۱۲۳۴۵۶۷)." };
  return { ok: true };
}

export default function ContactForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [state, action, pending] = useActionState<FormState, FormData>(sendMessage, {});
  useEffect(() => {
    if (state.ok) track("form_submit", { form: "contact" });
  }, [state.ok]);

  if (state.ok)
    return (
      <div className="rounded-[22px] bg-pine p-10 text-center text-white">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-white/10 text-2xl">✓</span>
        <p className="mt-5 text-xl font-bold">پیام شما ثبت شد</p>
        <p className="mt-2 text-white/70">کارشناسان ویژن به‌زودی با شما تماس می‌گیرند.</p>
      </div>
    );

  const inp =
    "w-full rounded-2xl border border-line bg-white px-5 py-3.5 text-[15px] outline-none transition placeholder:text-smoke/60 focus:border-brass focus:ring-4 focus:ring-brass/10";
  return (
    <form action={action} className="space-y-4">
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium">نام و نام خانوادگی</label>
          <input name="name" required placeholder="مثلاً سارا محمدی" className={inp} />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium">شماره موبایل</label>
          <input name="phone" required inputMode="tel" placeholder="۰۹۱۲ ۰۰۰ ۰۰۰۰" className={inp} />
        </div>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">محصول موردنظر</label>
        <select name="product" defaultValue={defaultProduct} className={inp}>
          <option value="">هنوز مطمئن نیستم — نیاز به مشاوره دارم</option>
          {CATEGORIES.map((c) => (
            <option key={c.slug} value={c.name}>{c.name}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="mb-2 block text-sm font-medium">توضیح پروژه</label>
        <textarea name="message" rows={4} placeholder="مثلاً: پارتیشن برای یک دفتر ۸۰ متری در سعادت‌آباد…" className={inp} />
      </div>
      {state.error && <p className="rounded-2xl bg-red-50 px-5 py-3 text-sm text-red-700">{state.error}</p>}
      <button
        disabled={pending}
        className="group flex w-full items-center justify-center gap-2 rounded-full bg-ink py-4 font-semibold text-white transition hover:bg-pine disabled:opacity-50"
      >
        {pending ? "در حال ارسال…" : "ارسال درخواست مشاوره"}
        <svg viewBox="0 0 24 24" className="h-4 w-4 -scale-x-100 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-6-6 6 6-6 6" /></svg>
      </button>
      <p className="text-center text-[12.5px] text-smoke">با ارسال فرم، کارشناسان ما حداکثر ظرف یک روز کاری تماس می‌گیرند.</p>
    </form>
  );
}
