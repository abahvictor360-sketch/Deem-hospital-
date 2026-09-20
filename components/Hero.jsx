import Image from "next/image";
import Link from "next/link";
import { doctors, stats } from "@/lib/site";
import Icon from "./Icon";
import { Button } from "./ui";

const chips = ["Cardiologist", "Neurologist", "Dermatologist", "Paediatrics", "Dental Care"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 60% at 10% 0%, rgba(74,108,247,0.18), transparent 62%), radial-gradient(45% 55% at 95% 8%, rgba(116,146,255,0.16), transparent 60%)",
        }}
      />
      <div className="shell grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div className="rise">
          <p className="max-w-xs text-[11px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-soft">
            We provide a comprehensive range of medical services to meet all your healthcare needs.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {doctors.slice(0, 3).map((d) => (
                <span key={d.slug} className="relative size-11 overflow-hidden rounded-full ring-2 ring-[var(--page)]">
                  <Image src={d.image} alt="" fill sizes="44px" className="object-cover" />
                </span>
              ))}
            </div>
            <div>
              <p className="font-display text-2xl font-semibold leading-none">
                125<span className="text-brand-500">k+</span>
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-soft">Trusted patients</p>
            </div>
          </div>

          <h1 className="mt-7 text-[2.6rem] font-semibold leading-[1.04] sm:text-6xl lg:text-[4.1rem]">
            Trusted Specialists
            <br />
            for Every <span className="text-brand-500">Medical</span>
            <br />
            Need
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-soft">
            Consultant-led care, 24-hour emergency response and advanced diagnostics — all under
            one roof in the heart of Lagos.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/appointment" variant="dark">Schedule an appointment</Button>
            <Button href="/doctors" variant="soft" icon="users">Find a doctor</Button>
          </div>
        </div>

        <div className="relative rise" style={{ animationDelay: "120ms" }}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] sm:aspect-[5/5]">
            <Image
              src="/images/doctor-portrait.jpg"
              alt="A consultant at Deem Hospital"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[50%_22%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/45 via-transparent to-transparent" />

            <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-2">
              {chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-white/85 px-3.5 py-1.5 text-[11px] font-semibold text-ink-700 backdrop-blur-md"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute bottom-28 left-2 w-52 rounded-2xl border border-[var(--line)] surface p-3 shadow-xl float-soft sm:left-0 sm:w-56 sm:-translate-x-6">
            <div className="flex items-center gap-3">
              <span className="relative size-10 shrink-0 overflow-hidden rounded-xl">
                <Image src="/images/heart-stethoscope.jpg" alt="" fill sizes="40px" className="object-cover" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">Orthopaedics</p>
                <p className="mt-0.5 flex items-center gap-1 text-[11px] text-soft">
                  <Icon name="clock" className="size-3" /> 12pm – 6pm
                </p>
              </div>
            </div>
            <Link
              href="/appointment"
              className="mt-3 flex items-center justify-center gap-1.5 rounded-xl bg-brand-500 py-2 text-[11px] font-semibold text-white transition hover:bg-brand-600"
            >
              Book now <Icon name="arrow" className="size-3" />
            </Link>
          </div>

          <div className="absolute -right-6 bottom-24 hidden w-52 rounded-2xl border border-[var(--line)] surface p-4 shadow-xl float-soft sm:block" style={{ animationDelay: "1.4s" }}>
            <p className="text-xs font-semibold leading-snug">
              We&apos;ll help you plan extraordinary medical services.
            </p>
            <div className="mt-3 flex items-center gap-2 border-t border-[var(--line)] pt-3">
              <span className="relative size-8 overflow-hidden rounded-full">
                <Image src="/images/doctor-portrait.jpg" alt="" fill sizes="32px" className="object-cover" />
              </span>
              <div>
                <p className="text-[11px] font-semibold">Dr. Adaeze Okonkwo</p>
                <p className="text-[10px] text-soft">Cardiologist</p>
              </div>
            </div>
          </div>

          <span className="absolute right-6 top-6 hidden items-center gap-1.5 rounded-full bg-white/85 px-3 py-1.5 text-[11px] font-semibold text-ink-700 backdrop-blur-md sm:flex">
            <span className="size-1.5 rounded-full bg-emerald-500" /> Eye consulting
          </span>
        </div>
      </div>

      <div className="shell">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[var(--line)] surface-soft lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="surface px-6 py-8 text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="font-display text-3xl font-semibold sm:text-4xl">{s.value}</span>
                <span className="mt-1.5 block text-xs uppercase tracking-[0.14em] text-soft">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
