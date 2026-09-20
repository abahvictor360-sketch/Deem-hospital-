"use client";

import { useState } from "react";
import Icon from "./Icon";

const field =
  "w-full rounded-2xl border border-[var(--line)] surface-soft px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200";
const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-soft";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }));

  function onSubmit(e) {
    e.preventDefault();
    const next = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Please enter a valid email address.";
    if (values.message.trim().length < 10) next.message = "Please give us a little more detail.";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="card p-8 text-center sm:p-12">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand-500 text-white">
          <Icon name="check" className="size-7" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold">Message sent</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-soft">
          We reply to every enquiry within one working day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="c-name">Name</label>
          <input id="c-name" className={field} value={values.name} onChange={set("name")} />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="c-email">Email</label>
          <input id="c-email" type="email" className={field} value={values.email} onChange={set("email")} />
          {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor="c-subject">Subject</label>
        <input id="c-subject" className={field} value={values.subject} onChange={set("subject")} placeholder="Billing, records, feedback…" />
      </div>
      <div>
        <label className={labelCls} htmlFor="c-message">Message</label>
        <textarea id="c-message" rows={5} className={field} value={values.message} onChange={set("message")} />
        {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>}
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
      >
        Send message
        <Icon name="arrow" className="size-4" />
      </button>
    </form>
  );
}
