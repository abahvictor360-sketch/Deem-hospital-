import Reveal from "@/components/Reveal";
import { DoctorCard } from "@/components/cards";
import { Button, PageHero } from "@/components/ui";
import { doctors } from "@/lib/site";

export const metadata = {
  title: "Doctors",
  description: "Meet the consultants at Deem Hospital — cardiology, neurology, gastroenterology, dermatology, paediatrics and radiology.",
};

export default function DoctorsPage() {
  return (
    <>
      <PageHero
        eyebrow="Our consultants"
        title="Sixty specialists. One record. One building."
        lead="Every consultant here holds a specialist fellowship and runs a named clinic you can book directly — no referral required."
      >
        <Button href="/appointment">Book an appointment</Button>
      </PageHero>

      <section className="shell mt-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d, i) => (
            <Reveal key={d.slug} delay={(i % 3) * 90}>
              <DoctorCard doctor={d} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
