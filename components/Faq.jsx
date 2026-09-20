"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function Faq({ items }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-[var(--line)] card overflow-hidden">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="font-display text-base font-semibold sm:text-lg">{item.q}</span>
              <span className={`grid size-8 shrink-0 place-items-center rounded-full transition ${isOpen ? "bg-brand-500 text-white" : "surface-soft text-soft"}`}>
                <Icon name={isOpen ? "minus" : "plus"} className="size-4" />
              </span>
            </button>
            <div
              className="grid transition-all duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-soft">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
