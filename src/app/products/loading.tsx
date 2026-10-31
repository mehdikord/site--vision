export default function Loading() {
  return (
    <div className="container-x py-14">
      <div className="skeleton h-4 w-32 rounded-full" />
      <div className="skeleton mt-4 h-12 w-64 rounded-2xl" />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className={`skeleton rounded-[26px] ${i === 0 ? "aspect-[21/9] md:col-span-2" : "aspect-[4/3]"}`} />
        ))}
      </div>
    </div>
  );
}
