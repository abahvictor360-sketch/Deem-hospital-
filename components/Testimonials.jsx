"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function Testimonials({ items }) {
  const [index, setIndex] = useState(0);
  const item = items[index];

  const go = (dir) => setIndex((i) => (i + dir + items.length) % items.length);

  return (
    <div className="card p-8 sm:p-10">
      <div className="flex gap-1 text-brand-500">
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" className="size-4 fill-current" strokeWidth={1} />
        ))}
      </div>
      <blockquote className="mt-6 font-display text-xl leading-relaxed sm:text-2xl">
        “{item.quote}”
      </blockquote>
      <div className="mt-8 flex items-center justify-between gap-4">
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-sm text-soft">{item.detail}</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous testimonial"
            className="grid size-10 place-items-center rounded-full border border-[var(--line)] transition hover:border-brand-300 hover:text-brand-500"
          >
            <Icon name="chevronLeft" className="size-4" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next testimonial"
            className="grid size-10 place-items-center rounded-full bg-ink-900 text-white transition hover:bg-brand-500"
          >
            <Icon name="chevronRight" className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
