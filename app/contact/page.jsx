import ContactForm from "@/components/ContactForm";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import Faq from "@/components/Faq";
import { PageHero, SectionHeading } from "@/components/ui";
import { faqs, site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: `Reach Deem Hospital — ${site.address}. Emergency line open 24 hours.`,
};

const channels = [
  { icon: "ambulance", label: "Emergency, 24 hours", value: site.emergency, href: `tel:${site.emergency.replace(/\s/g, "")}` },
  { icon: "phone", label: "Reception & bookings", value: site.phone, href: `tel:${site.phone.replace(/\s/g, "")}` },
  { icon: "mail", label: "General enquiries", value: site.email, href: `mailto:${site.email}` },
  { icon: "pin", label: "Find us", value: site.address },
  { icon: "clock", label: "Opening hours", value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk to us — any hour, any day"
        lead="Our emergency line never closes. For bookings, records and billing, reception is open 8am to 8pm, Monday to Saturday."
      />

      <section className="shell mt-16 grid gap-8 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <div className="space-y-4">
          {channels.map((c, i) => {
            const inner = (
              <>
                <span className="grid size-11 shrink-0 place-items-center rounded-xl surface-soft text-brand-500">
                  <Icon name={c.icon} className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] uppercase tracking-[0.14em] text-soft">{c.label}</span>
                  <span className="mt-1 block text-sm font-semibold leading-snug">{c.value}</span>
                </span>
              </>
            );
            return (
              <Reveal key={c.label} delay={i * 70}>
                {c.href ? (
                  <a href={c.href} className="flex items-center gap-4 card p-5 transition hover:border-brand-300">
                    {inner}
                  </a>
                ) : (
                  <div className="flex items-center gap-4 card p-5">{inner}</div>
                )}
              </Reveal>
            );
          })}

          <Reveal delay={400} className="overflow-hidden card">
            <iframe
              title="Map to Deem Hospital"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.4200%2C6.4380%2C3.4500%2C6.4560&layer=mapnik"
              className="h-64 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </section>

      <section className="shell mt-24">
        <Reveal>
          <SectionHeading align="center" eyebrow="FAQ" title="Answers before you call" />
        </Reveal>
        <Reveal delay={120} className="mx-auto mt-10 max-w-3xl">
          <Faq items={faqs} />
        </Reveal>
      </section>
    </>
  );
}
