import Image from "next/image";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import { Button, PageHero, SectionHeading } from "@/components/ui";
import { departmentsQuickFacts, site, stats, testimonials } from "@/lib/site";

export const metadata = {
  title: "About",
  description: "How Deem Hospital was built, what we stand for, and the standards we hold ourselves to.",
};

const values = [
  { icon: "heart", title: "The patient decides", text: "No procedure without a plain-English explanation of the alternatives, the risks and the cost." },
  { icon: "clock", title: "Speed is care", text: "Waiting is not neutral. We measure door-to-decision time as closely as clinical outcomes." },
  { icon: "shieldCheck", title: "Evidence, not habit", text: "Our clinical board reviews every protocol annually against current international guidance." },
  { icon: "users", title: "One team, one record", text: "Your cardiologist and your radiologist read the same notes, on the same day." },
];

const timeline = [
  ["2009", "Deem opens as a 24-bed clinic in Ikoyi with four consultants and one theatre."],
  ["2014", "The emergency department goes 24/7 and the first CT scanner is installed."],
  ["2018", "A 120-bed tower opens, bringing cardiology, neurology and paediatrics on site."],
  ["2022", "The imaging unit commits to 24-hour reporting on every routine scan."],
  ["2026", "180 beds, six theatres, 60+ consultants and a patient portal used by 40,000 families."],
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Deem"
        title="A hospital built around how patients actually move through it"
        lead="We started in 2009 with four consultants and a simple frustration: patients were being sent across Lagos for tests that should have taken an afternoon. Everything we have built since has been an answer to that."
      >
        <Button href="/appointment">Book an appointment</Button>
        <Button href="/contact" variant="soft" icon="arrowUpRight">Visit us</Button>
      </PageHero>

      <section className="shell mt-16">
        <Reveal className="relative aspect-[16/9] overflow-hidden rounded-[2rem] lg:aspect-[21/9]">
          <Image src="/images/ward.jpg" alt="A ward at Deem Hospital" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
          <dl className="absolute inset-x-5 bottom-5 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
            {departmentsQuickFacts.map((f) => (
              <div key={f.label} className="rounded-2xl bg-white/85 px-4 py-3 backdrop-blur-md">
                <dt className="text-[11px] uppercase tracking-[0.14em] text-ink-500">{f.label}</dt>
                <dd className="font-display text-xl font-semibold text-ink-900">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      <section className="shell mt-24 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <SectionHeading eyebrow="What we stand for" title="Four commitments we hold ourselves to" />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 80} className="card p-6">
              <span className="grid size-10 place-items-center rounded-xl surface-soft text-brand-500">
                <Icon name={v.icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell mt-24">
        <Reveal>
          <SectionHeading eyebrow="Our story" title="Seventeen years, one direction" />
        </Reveal>
        <ol className="mt-10 grid gap-6 md:grid-cols-5">
          {timeline.map(([year, text], i) => (
            <Reveal key={year} delay={i * 80} className="card p-6">
              <p className="font-display text-2xl font-semibold text-brand-500">{year}</p>
              <p className="mt-3 text-sm leading-relaxed text-soft">{text}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="shell mt-24">
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
      </section>

      <section className="shell mt-24 grid gap-8 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionHeading eyebrow="Patient stories" title="In their words" />
          <div className="mt-8">
            <Testimonials items={testimonials} />
          </div>
        </Reveal>
        <Reveal delay={120} id="careers" className="card p-8 sm:p-10">
          <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
            Join our team of dedicated healthcare professionals
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-soft">
            We recruit consultants, nurses, radiographers and allied health professionals year-round.
            Send a CV and a note about the department you want to work in.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm text-soft">
            {["Funded specialist training", "Protected teaching time", "On-site childcare", "Full family health cover"].map((b) => (
              <li key={b} className="flex items-center gap-2.5">
                <Icon name="check" className="size-4 text-brand-500" strokeWidth={2.4} /> {b}
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${site.email}?subject=Careers at Deem Hospital`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Email our recruitment team <Icon name="arrow" className="size-4" />
          </a>
        </Reveal>
      </section>
    </>
  );
}
