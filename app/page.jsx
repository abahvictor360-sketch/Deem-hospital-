import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import Faq from "@/components/Faq";
import Reveal from "@/components/Reveal";
import Testimonials from "@/components/Testimonials";
import NewsletterForm from "@/components/NewsletterForm";
import { DoctorCard, PostCard, ServiceCard } from "@/components/cards";
import { Button, Eyebrow, Pill, SectionHeading } from "@/components/ui";
import { doctors, faqs, posts, services, site, testimonials } from "@/lib/site";

const partners = ["Axa Mansard", "Hygeia HMO", "Reliance Health", "Leadway", "Avon HMO", "Bastion"];

const promises = [
  { icon: "shieldCheck", title: "Accredited care", text: "Licensed by the Lagos State Health Facility Monitoring Agency and ISO 9001 certified." },
  { icon: "clock", title: "24/7 emergency", text: "A consultant-staffed emergency department that never closes, with nine ambulances on call." },
  { icon: "scan", title: "Results in 24 hours", text: "On-site CT, MRI and pathology, with most results signed off the same day." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* About split */}
      <section className="shell mt-24">
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1fr]">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem]">
            <Image src="/images/ward.jpg" alt="Inside a Deem Hospital ward" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 to-transparent" />
            <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-600">
              Insight
            </span>
            <div className="absolute inset-x-5 bottom-5 text-white">
              <p className="text-xs opacity-80">Since 2009</p>
              <p className="mt-1.5 font-display text-xl font-semibold leading-snug">
                We are here to support your health
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <SectionHeading
              eyebrow="About us"
              title={<>Our team of highly trained <span className="text-brand-500">medical</span> professionals is here to provide the best possible care.</>}
              lead="Deem Hospital brings 60+ consultants across twelve specialties into one building, so a patient can be assessed, scanned, diagnosed and treated without being sent somewhere else."
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {promises.map((p) => (
                <div key={p.title} className="card p-5">
                  <span className="grid size-10 place-items-center rounded-xl surface-soft text-brand-500">
                    <Icon name={p.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 text-sm font-semibold">{p.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-soft">{p.text}</p>
                </div>
              ))}
            </div>
            <Button href="/about" className="mt-8">Learn more</Button>
          </Reveal>
        </div>
      </section>

      {/* Team + newsletter + feature panel */}
      <section className="shell mt-24">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-6">
            <Reveal className="card p-6">
              <Eyebrow>Our team</Eyebrow>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug">
                Our team <span className="text-soft">can help you get the best consultant</span>
              </h3>
              <div className="mt-6 flex -space-x-2">
                {doctors.slice(0, 5).map((d) => (
                  <Link
                    key={d.slug}
                    href={`/doctors/${d.slug}`}
                    title={d.name}
                    className="relative size-11 overflow-hidden rounded-full ring-2 ring-[var(--surface)] transition hover:z-10 hover:scale-110"
                  >
                    <Image src={d.image} alt={d.name} fill sizes="44px" className="object-cover" />
                  </Link>
                ))}
              </div>
              <Link href="/doctors" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-500">
                Meet all consultants <Icon name="arrow" className="size-4" />
              </Link>
            </Reveal>

            <Reveal delay={100} className="card p-6">
              <Eyebrow>Get a bonus</Eyebrow>
              <h3 className="mt-4 font-display text-xl font-semibold leading-snug">
                Discover <span className="text-soft">our latest health programmes.</span>
              </h3>
              <NewsletterForm className="mt-6" />
            </Reveal>
          </div>

          <Reveal delay={160} className="relative min-h-[22rem] overflow-hidden rounded-[1.75rem]">
            <Image src="/images/scrubs-heart.jpg" alt="A clinician reviewing a scan" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
            <div className="absolute inset-0 bg-ink-900/25" />
            <Link
              href="/about"
              aria-label="More about Deem Hospital"
              className="absolute left-1/2 top-1/2 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-brand-600 backdrop-blur transition hover:scale-110"
            >
              <Icon name="play" className="size-6 fill-current" />
            </Link>
            <span className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-brand-500 text-white">
              <Icon name="arrowUpRight" className="size-5" />
            </span>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="shell mt-24">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <Reveal className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] lg:aspect-[4/4.2]">
            <Image src="/images/hero-doctor.jpg" alt="Consultant at Deem Hospital" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-900/75 to-transparent" />
            <div className="absolute inset-x-5 bottom-5 text-white">
              <p className="font-display text-lg font-semibold leading-snug">Team up and innovate</p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink-900"
              >
                Contact us <Icon name="arrowUpRight" className="size-3.5" />
              </Link>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Pill className="text-brand-500">New — reach out with any question or to schedule a visit</Pill>
              <h2 className="mt-5 text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.75rem]">
                We are here to support your health at every stage and look forward
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {services.slice(0, 3).map((s, i) => (
                <Reveal key={s.slug} delay={i * 90}>
                  <ServiceCard service={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(3).map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button href="/services" variant="soft">View all services</Button>
        </Reveal>
      </section>

      {/* Partner marquee */}
      <section className="mt-24 overflow-hidden border-y border-[var(--line)] surface py-8">
        <p className="shell mb-6 text-center text-xs uppercase tracking-[0.2em] text-soft">
          Accepted by every major health plan
        </p>
        <div className="marquee-track gap-14 px-7">
          {[...partners, ...partners].map((p, i) => (
            <span key={`${p}-${i}`} className="shrink-0 font-display text-xl font-semibold text-ink-300">
              {p}
            </span>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="shell mt-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Insights"
            title="Feel free to explore our content & join with us"
          />
          <p className="max-w-xs text-sm leading-relaxed text-soft">
            Guidance written by the consultants who treat these conditions every day.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.slice(0, 1).map((p) => (
            <Reveal key={p.slug} className="md:col-span-2">
              <PostCard post={p} featured />
            </Reveal>
          ))}
          {posts.slice(1, 3).map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <Button href="/blog" variant="soft">Read all insights</Button>
        </Reveal>
      </section>

      {/* Doctors */}
      <section className="shell mt-24">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Consultants"
            title="Meet the specialists behind the care"
            lead="Every consultant at Deem Hospital holds a specialist fellowship and runs a named clinic you can book directly."
          />
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.slice(0, 3).map((d, i) => (
            <Reveal key={d.slug} delay={i * 90}>
              <DoctorCard doctor={d} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* Testimonials + FAQ */}
      <section className="shell mt-24 grid gap-8 lg:grid-cols-2 lg:items-start">
        <Reveal>
          <SectionHeading eyebrow="Patient stories" title="What our patients say" />
          <div className="mt-8">
            <Testimonials items={testimonials} />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading eyebrow="FAQ" title="Questions we hear most" />
          <div className="mt-8">
            <Faq items={faqs} />
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="shell mt-24">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink-900 px-6 py-14 text-white sm:px-12 sm:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(50% 80% at 85% 20%, rgba(74,108,247,0.45), transparent 65%)" }}
          />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-5xl">
                Join our team of dedicated healthcare professionals
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/70">
                Or book a consultation today — most appointments are confirmed within the hour, and
                our emergency department is open around the clock.
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row lg:flex-col">
              <Button href="/appointment" variant="light">
                Book an appointment
              </Button>
              <a
                href={`tel:${site.emergency.replace(/\s/g, "")}`}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold transition hover:border-white"
              >
                <Icon name="ambulance" className="size-4" /> Emergency {site.emergency}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
