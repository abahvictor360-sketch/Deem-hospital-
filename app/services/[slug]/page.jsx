import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { DoctorCard } from "@/components/cards";
import { Button, Eyebrow, SectionHeading } from "@/components/ui";
import { doctors, services } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return { title: service.name, description: service.blurb };
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const team = doctors.filter((d) => d.speciality === service.slug);
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="shell pt-12">
        <nav className="flex items-center gap-2 text-xs text-soft">
          <Link href="/" className="transition hover:text-brand-500">Home</Link>
          <span>/</span>
          <Link href="/services" className="transition hover:text-brand-500">Services</Link>
          <span>/</span>
          <span className="text-brand-500">{service.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="rise">
            <Eyebrow>{service.tag}</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl">{service.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">{service.blurb}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/appointment">Book {service.name.toLowerCase()}</Button>
              <span className="rounded-full surface-soft px-4 py-2.5 text-sm font-semibold text-soft">
                {service.price}
              </span>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] rise" style={{ animationDelay: "120ms" }}>
            <Image src={service.image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="shell mt-20 grid gap-10 lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <SectionHeading eyebrow="What we treat" title={`Inside the ${service.name.toLowerCase()} unit`} />
          <ul className="mt-8 space-y-3">
            {service.treatments.map((t) => (
              <li key={t} className="flex items-start gap-3 card p-4">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-500/10 text-brand-500">
                  <Icon name="check" className="size-3.5" strokeWidth={2.4} />
                </span>
                <span className="text-sm leading-relaxed">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="card h-fit p-6">
          <h3 className="font-display text-lg font-semibold">How a visit works</h3>
          <ol className="mt-6 space-y-6">
            {[
              ["Book", "Request a slot online or by phone. Most are confirmed within an hour."],
              ["Assess", "Your consultant reviews your history and orders any tests on site."],
              ["Treat", "Results and a treatment plan, usually in the same visit."],
              ["Follow up", "A named clinic to come back to, plus results in your portal."],
            ].map(([title, text], i) => (
              <li key={title} className="flex gap-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white">
                  {i + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-soft">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>

      {team.length > 0 && (
        <section className="shell mt-24">
          <Reveal>
            <SectionHeading eyebrow="The team" title={`Consultants in ${service.name.toLowerCase()}`} />
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((d, i) => (
              <Reveal key={d.slug} delay={i * 90}>
                <DoctorCard doctor={d} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="shell mt-24">
        <Reveal>
          <SectionHeading eyebrow="Also at Deem" title="Other departments" />
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {others.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link href={`/services/${s.slug}`} className="group card flex items-center gap-4 p-5 transition hover:border-brand-300">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl surface-soft text-brand-500">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{s.name}</span>
                  <span className="block truncate text-xs text-soft">{s.tag}</span>
                </span>
                <Icon name="arrowUpRight" className="size-4 text-soft transition group-hover:text-brand-500" />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
