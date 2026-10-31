"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { track } from "@/lib/track";

export default function QuickContact() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const fn = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const items = [
    {
      href: `https://wa.me/${SITE.whatsapp}`,
      label: "گفتگو در واتساپ",
      cls: "bg-[#1faa55] hover:bg-[#178a44]",
      icon: "M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2s-1 .3-3.4-.7a11.6 11.6 0 0 1-4.6-4.1c-.4-.6-1-1.7-1-3.2s.8-2.2 1.1-2.5c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .7.5l1 2.3c.1.2.1.4 0 .6l-.5.7c-.2.2-.3.4-.1.7a8.4 8.4 0 0 0 4 3.5c.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2.2 1c.3.2.5.2.6.4.1.2.1.8-.1 1.4Z",
    },
    {
      href: `tel:${SITE.phone}`,
      label: "تماس تلفنی",
      cls: "bg-ink hover:bg-pine",
      icon: "M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z",
    },
  ];
  return (
    <div className={`fixed bottom-6 left-6 z-50 flex flex-col gap-3 transition-all duration-500 ${show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"}`}>
      {items.map((i) => (
        <a
          key={i.label}
          href={i.href}
          target={i.href.startsWith("http") ? "_blank" : undefined}
          rel="noopener"
          aria-label={i.label}
          title={i.label}
          onClick={() => track("contact_click", { channel: i.label })}
          className={`group flex h-[52px] items-center gap-0 overflow-hidden rounded-full text-white shadow-xl shadow-ink/20 transition-all duration-300 hover:gap-2 hover:pl-5 ${i.cls}`}
        >
          <span className="grid h-[52px] w-[52px] shrink-0 place-items-center">
            <svg viewBox="0 0 24 24" className="h-[22px] w-[22px]" fill="currentColor"><path d={i.icon} /></svg>
          </span>
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-medium transition-all duration-300 group-hover:max-w-[120px]">{i.label}</span>
        </a>
      ))}
    </div>
  );
}
