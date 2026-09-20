import AppointmentForm from "@/components/AppointmentForm";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import { PageHero } from "@/components/ui";
import { site } from "@/lib/site";

export const metadata = {
  title: "Book an appointment",
  description: "Request an appointment with a consultant at Deem Hospital. Most requests are confirmed within one working hour.",
};

const assurances = [
  ["clock", "Confirmed in an hour", "Our scheduling team calls back within one working hour to confirm your slot."],
  ["users", "Pick your consultant", "Choose a named specialist, or let us match you to the first available."],
  ["shieldCheck", "Insurance checked upfront", "We verify your HMO cover before your visit, so there are no surprises."],
];

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Appointments"
        title="Book a consultant in under two minutes"
        lead="Fill in the form and our scheduling team will call you back to confirm. For anything urgent, please call our 24-hour emergency line instead."
      />

      <section className="shell mt-16 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-start">
        <Reveal>
          <AppointmentForm />
        </Reveal>

        <div className="space-y-4">
          {assurances.map(([icon, title, text], i) => (
            <Reveal key={title} delay={i * 80} className="card p-6">
              <span className="grid size-10 place-items-center rounded-xl surface-soft text-brand-500">
                <Icon name={icon} className="size-5" />
              </span>
              <h3 className="mt-4 text-sm font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-soft">{text}</p>
            </Reveal>
          ))}

          <Reveal delay={260} className="rounded-3xl bg-ink-900 p-6 text-white">
            <span className="grid size-10 place-items-center rounded-xl bg-white/10">
              <Icon name="ambulance" className="size-5" />
            </span>
            <h3 className="mt-4 text-sm font-semibold">This is an emergency</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Chest pain, difficulty breathing, heavy bleeding, sudden weakness or a first seizure —
              do not use this form.
            </p>
            <a
              href={`tel:${site.emergency.replace(/\s/g, "")}`}
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-900"
            >
              Call {site.emergency} <Icon name="arrow" className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
