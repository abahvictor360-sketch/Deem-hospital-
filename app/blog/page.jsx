import Reveal from "@/components/Reveal";
import { PostCard } from "@/components/cards";
import { PageHero } from "@/components/ui";
import NewsletterForm from "@/components/NewsletterForm";
import { posts } from "@/lib/site";

export const metadata = {
  title: "Health insights",
  description: "Guidance from the consultants at Deem Hospital on prevention, cardiology, emergency care and diagnostics.",
};

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Health guidance from the people who treat it"
        lead="Written by our consultants, reviewed by our clinical board, and kept free of jargon wherever we can manage it."
      />

      <section className="shell mt-16">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <PostCard post={featured} featured />
          </Reveal>
          {rest.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 90}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="shell mt-20">
        <Reveal className="card flex flex-col items-center gap-6 p-8 text-center sm:p-12">
          <h2 className="max-w-lg text-2xl font-semibold leading-snug sm:text-3xl">
            One health letter a month. No spam, no selling.
          </h2>
          <NewsletterForm className="w-full max-w-sm" />
        </Reveal>
      </section>
    </>
  );
}
