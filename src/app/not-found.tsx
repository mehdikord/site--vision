import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-32 text-center">
      <p className="font-latin text-7xl text-brass">404</p>
      <h1 className="mt-6 text-3xl font-black">این صفحه شیشه‌ای نیست — پیدا نشد!</h1>
      <p className="mt-3 text-smoke">شاید آدرس را اشتباه وارد کرده‌اید.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="rounded-full bg-ink px-7 py-3 text-sm font-semibold text-white">بازگشت به خانه</Link>
        <Link href="/products" className="rounded-full border hairline bg-white px-7 py-3 text-sm font-semibold">شوروم محصولات</Link>
      </div>
    </div>
  );
}
