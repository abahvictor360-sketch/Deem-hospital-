"use client";

import { useState } from "react";
import { doctors, services } from "@/lib/site";
import Icon from "./Icon";

const field =
  "w-full rounded-2xl border border-[var(--line)] surface-soft px-4 py-3 text-sm outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-200";
const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-soft";

export default function AppointmentForm() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    doctor: "",
    date: "",
    time: "",
    notes: "",
  });

  const set = (key) => (e) => setValues((v) => ({ ...v, [key]: e.target.value }));

  const available = values.department
    ? doctors.filter((d) => d.speciality === values.department)
    : doctors;

  function validate() {
    const next = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Please enter a valid email address.";
    if (values.phone.replace(/\D/g, "").length < 7) next.phone = "Please enter a reachable phone number.";
    if (!values.department) next.department = "Choose a department.";
    if (!values.date) next.date = "Pick a preferred date.";
    return next;
  }

  function onSubmit(e) {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  if (sent) {
    return (
      <div className="card p-8 text-center sm:p-12">
        <span className="mx-auto grid size-14 place-items-center rounded-full bg-brand-500 text-white">
          <Icon name="check" className="size-7" />
        </span>
        <h3 className="mt-6 text-2xl font-semibold">Request received</h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-soft">
          Thank you, {values.name.split(" ")[0]}. Our scheduling team will confirm your appointment by
          phone within one working hour. For anything urgent, call our 24-hour line.
        </p>
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setValues({ name: "", email: "", phone: "", department: "", doctor: "", date: "", time: "", notes: "" });
          }}
          className="mt-8 rounded-full border border-[var(--line)] px-6 py-3 text-sm font-semibold transition hover:border-brand-300 hover:text-brand-500"
        >
          Book another appointment
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="name">Full name</label>
          <input id="name" className={field} value={values.name} onChange={set("name")} placeholder="Amaka Obi" />
          {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Phone</label>
          <input id="phone" type="tel" className={field} value={values.phone} onChange={set("phone")} placeholder="+234 …" />
          {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="email">Email</label>
        <input id="email" type="email" className={field} value={values.email} onChange={set("email")} placeholder="you@example.com" />
        {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="department">Department</label>
          <select
            id="department"
            className={field}
            value={values.department}
            onChange={(e) => setValues((v) => ({ ...v, department: e.target.value, doctor: "" }))}
          >
            <option value="">Select a department</option>
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
          {errors.department && <p className="mt-1.5 text-xs text-red-500">{errors.department}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="doctor">Preferred consultant</label>
          <select id="doctor" className={field} value={values.doctor} onChange={set("doctor")}>
            <option value="">No preference</option>
            {available.map((d) => (
              <option key={d.slug} value={d.slug}>{d.name}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor="date">Preferred date</label>
          <input id="date" type="date" className={field} value={values.date} onChange={set("date")} />
          {errors.date && <p className="mt-1.5 text-xs text-red-500">{errors.date}</p>}
        </div>
        <div>
          <label className={labelCls} htmlFor="time">Preferred time</label>
          <select id="time" className={field} value={values.time} onChange={set("time")}>
            <option value="">Any time</option>
            <option>Morning (8am – 12pm)</option>
            <option>Afternoon (12pm – 4pm)</option>
            <option>Evening (4pm – 8pm)</option>
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="notes">Reason for visit</label>
        <textarea id="notes" rows={4} className={field} value={values.notes} onChange={set("notes")} placeholder="Briefly describe your symptoms or the reason for the appointment." />
      </div>

      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600"
      >
        Request appointment
        <Icon name="arrow" className="size-4" />
      </button>
      <p className="text-center text-xs text-soft">
        This form is a demonstration and does not transmit data. In an emergency, call our 24-hour line.
      </p>
    </form>
  );
}
