import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { DoctorCard } from "@/components/cards";
import { Button, Eyebrow, Pill, SectionHeading } from "@/components/ui";
import { doctors, services } from "@/lib/site";

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) return {};
  return { title: doctor.name, description: `${doctor.role} at Deem Hospital. ${doctor.bio}` };
}

export default async function DoctorPage({ params }) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);
  if (!doctor) notFound();

  const service = services.find((s) => s.slug === doctor.speciality);
  const colleagues = doctors.filter((d) => d.slug !== doctor.slug).slice(0, 3);

  return (
    <>
      <section className="shell pt-12">
        <nav className="flex items-center gap-2 text-xs text-soft">
          <Link href="/" className="transition hover:text-brand-500">Home</Link>
          <span>/</span>
          <Link href="/doctors" className="transition hover:text-brand-500">Doctors</Link>
          <span>/</span>
          <span className="text-brand-500">{doctor.name}</span>
        </nav>

        <div className="mt-8 grid gap-10 lg:grid-cols-[0.75fr_1fr] lg:items-start">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] rise">
            <Image src={doctor.image} alt={doctor.name} fill priority sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top" />
          </div>

          <div className="rise" style={{ animationDelay: "120ms" }}>
            <Eyebrow>{doctor.role}</Eyebrow>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl">{doctor.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-soft">{doctor.bio}</p>

            <dl className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-[var(--line)] surface-soft sm:grid-cols-3">
              {[
                ["Experience", `${doctor.years} years`],
                ["Clinic days", doctor.days],
                ["Languages", doctor.languages.join(", ")],
              ].map(([label, value]) => (
                <div key={label} className="surface px-5 py-5">
                  <dt className="text-[11px] uppercase tracking-[0.14em] text-soft">{label}</dt>
                  <dd className="mt-1.5 text-sm font-semibold">{value}</dd>
                </div>
              ))}
            </dl>

            {service && (
              <div className="mt-6 flex flex-wrap gap-2">
                <Pill className="text-brand-500">{service.name}</Pill>
                {service.treatments.slice(0, 3).map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/appointment">Book with {doctor.name.split(" ")[1]}</Button>
              {service && (
                <Button href={`/services/${service.slug}`} variant="soft" icon="arrowUpRight">
                  {service.name} department
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="shell mt-20">
        <Reveal className="card grid gap-6 p-8 sm:grid-cols-3">
          {[
            ["shieldCheck", "Fellowship trained", "Specialist certification with ongoing revalidation."],
            ["users", "Named clinic", "Continuity of care — you see the same consultant each visit."],
            ["clock", "Same-day results", "On-site imaging and pathology, reported within 24 hours."],
          ].map(([icon, title, text]) => (
            <div key={title}>
              <span className="grid size-10 place-items-center rounded-xl surface-soft text-brand-500">
                <Icon name={icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold">{title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-soft">{text}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="shell mt-24">
        <Reveal>
          <SectionHeading eyebrow="Also at Deem" title="Other consultants" />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {colleagues.map((d, i) => (
            <Reveal key={d.slug} delay={i * 90}>
              <DoctorCard doctor={d} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
