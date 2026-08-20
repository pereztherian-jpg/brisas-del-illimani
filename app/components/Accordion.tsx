"use client";

import { useState, type ReactNode } from "react";

type Item = {
  id: string;
  title: string;
  body: ReactNode;
};

export default function Accordion({ items }: { items: Item[] }) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <div className="divide-y divide-white/10 border-t border-b border-white/10">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div key={item.id} id={item.id}>
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full min-h-14 items-center justify-between gap-4 py-4 text-left text-base sm:text-lg tracking-wide"
            >
              <span>{item.title}</span>
              <span
                className={`shrink-0 text-2xl leading-none transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-200 ${
                isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 text-sm sm:text-base text-neutral-300 leading-relaxed">
                {item.body}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
