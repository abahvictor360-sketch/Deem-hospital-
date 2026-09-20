import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";
import { Pill } from "./ui";

export function ServiceCard({ service, priority = false }) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className="group card flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-brand-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt=""
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 grid size-10 place-items-center rounded-xl bg-white/90 text-brand-600 backdrop-blur">
          <Icon name={service.icon} className="size-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <Pill>{service.tag}</Pill>
        <h3 className="mt-3 text-xl font-semibold">{service.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-soft">{service.blurb}</p>
        <span className="mt-5 flex items-center justify-between border-t border-[var(--line)] pt-4 text-sm font-semibold text-brand-500">
          Learn more
          <Icon name="arrowUpRight" className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}

export function DoctorCard({ doctor }) {
  return (
    <Link
      href={`/doctors/${doctor.slug}`}
      className="group card overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-brand-300"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={doctor.image}
          alt={doctor.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-3 bottom-3 rounded-2xl bg-white/85 p-4 backdrop-blur-md dark:bg-ink-900/80">
          <h3 className="font-display text-base font-semibold text-ink-900 dark:text-white">{doctor.name}</h3>
          <p className="mt-0.5 text-xs text-brand-600 dark:text-brand-300">{doctor.role}</p>
          <p className="mt-2 flex items-center gap-1.5 text-[11px] text-ink-500 dark:text-ink-300">
            <Icon name="clock" className="size-3.5" /> {doctor.days} · {doctor.years} yrs
          </p>
        </div>
      </div>
    </Link>
  );
}

export function PostCard({ post, featured = false }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group card flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-brand-300 ${
        featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <div className={`relative overflow-hidden ${featured ? "aspect-[16/10] md:aspect-auto md:w-1/2" : "aspect-[16/10]"}`}>
        <Image
          src={post.image}
          alt=""
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col justify-center p-6">
        <div className="flex items-center gap-3 text-xs text-soft">
          <Pill className="text-brand-500">{post.category}</Pill>
          <span>{post.readingTime}</span>
        </div>
        <h3 className={`mt-3 font-semibold leading-snug ${featured ? "text-2xl" : "text-lg"}`}>{post.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-soft">{post.excerpt}</p>
        <span className="mt-5 flex items-center gap-2 text-sm font-semibold text-brand-500">
          Read article
          <Icon name="arrowUpRight" className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </Link>
  );
}
