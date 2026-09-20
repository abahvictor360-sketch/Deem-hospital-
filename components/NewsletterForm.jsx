"use client";

import { useState } from "react";
import Icon from "./Icon";

export default function NewsletterForm({ className = "" }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setDone(true);
    setEmail("");
  }

  if (done) {
    return (
      <p className={`flex items-center gap-2 rounded-full surface-soft px-4 py-3 text-sm text-brand-500 ${className}`}>
        <Icon name="check" className="size-4" /> You are subscribed.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`flex items-center gap-2 rounded-full border border-[var(--line)] surface-soft p-1.5 ${className}`}>
      <label htmlFor="newsletter-email" className="sr-only">Email address</label>
      <input
        id="newsletter-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email"
        className="min-w-0 flex-1 bg-transparent px-3 py-1.5 text-sm outline-none placeholder:text-ink-300"
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-brand-600"
      >
        Send
      </button>
    </form>
  );
}
