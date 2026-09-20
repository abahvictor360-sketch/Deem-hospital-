import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { PostCard } from "@/components/cards";
import { Button, Pill } from "@/components/ui";
import { posts } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image], type: "article" },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = posts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const published = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <article className="shell pt-12">
        <nav className="flex items-center gap-2 text-xs text-soft">
          <Link href="/" className="transition hover:text-brand-500">Home</Link>
          <span>/</span>
          <Link href="/blog" className="transition hover:text-brand-500">Insights</Link>
        </nav>

        <header className="mx-auto mt-8 max-w-3xl rise">
          <div className="flex flex-wrap items-center gap-3 text-xs text-soft">
            <Pill className="text-brand-500">{post.category}</Pill>
            <time dateTime={post.date}>{published}</time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.1] sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed text-soft">{post.excerpt}</p>
        </header>

        <div className="relative mx-auto mt-10 aspect-[16/9] max-w-4xl overflow-hidden rounded-[1.75rem] rise" style={{ animationDelay: "120ms" }}>
          <Image src={post.image} alt="" fill priority sizes="(max-width: 1024px) 100vw, 60rem" className="object-cover" />
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-6">
          {post.body.map((para, i) => (
            <Reveal key={i} as="p" delay={i * 40} className="text-base leading-[1.85] text-soft">
              {para}
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 flex max-w-2xl flex-col items-start gap-4 card p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-relaxed text-soft">
            Have a question about this? Book fifteen minutes with the relevant consultant.
          </p>
          <Button href="/appointment" className="shrink-0">Book now</Button>
        </Reveal>
      </article>

      <section className="shell mt-24">
        <h2 className="text-2xl font-semibold">Keep reading</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {more.map((p, i) => (
            <Reveal key={p.slug} delay={i * 90}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
