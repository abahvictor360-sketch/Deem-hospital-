import Reveal from "@/components/Reveal";
import { ServiceCard } from "@/components/cards";
import { Button, PageHero, SectionHeading } from "@/components/ui";
import Faq from "@/components/Faq";
import { faqs, services } from "@/lib/site";

export const metadata = {
  title: "Services",
  description:
    "Twelve specialties under one roof — cardiology, neurology, gastroenterology, dermatology, paediatrics and full diagnostics at Deem Hospital.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Specialist care, without the referral maze"
        lead="Every department at Deem Hospital shares one record, one building and one set of imaging. You get assessed, scanned and treated without being sent across the city."
      >
        <Button href="/appointment">Book an appointment</Button>
        <Button href="/doctors" variant="soft" icon="users">Find a consultant</Button>
      </PageHero>

      <section className="shell mt-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <ServiceCard service={s} priority={i < 3} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell mt-24">
        <Reveal>
          <SectionHeading align="center" eyebrow="FAQ" title="Before you book" />
        </Reveal>
        <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
          <Faq items={faqs} />
        </Reveal>
      </section>
    </>
  );
}
