import Link from "next/link";
import { services, site } from "@/lib/site";
import Icon from "./Icon";
import Logo from "./Logo";
import NewsletterForm from "./NewsletterForm";

const columns = [
  {
    title: "Patients",
    links: [
      { label: "Book an appointment", href: "/appointment" },
      { label: "Our services", href: "/services" },
      { label: "Find a doctor", href: "/doctors" },
      { label: "Visiting hours", href: "/about" },
    ],
  },
  {
    title: "Hospital",
    links: [
      { label: "About Deem", href: "/about" },
      { label: "Health insights", href: "/blog" },
      { label: "Contact us", href: "/contact" },
      { label: "Careers", href: "/about#careers" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--line)] surface">
      <div className="shell py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-soft">
              {site.description}
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-soft">
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition hover:text-brand-500">
                <Icon name="phone" className="size-4 text-brand-500" /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 transition hover:text-brand-500">
                <Icon name="mail" className="size-4 text-brand-500" /> {site.email}
              </a>
              <p className="flex items-start gap-2">
                <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-brand-500" /> {site.address}
              </p>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-soft">{col.title}</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link href={link.href} className="text-soft transition hover:text-brand-500">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-soft">Newsletter</h3>
            <p className="mt-5 text-sm text-soft">
              Health guidance from our consultants, once a month. No spam.
            </p>
            <NewsletterForm className="mt-4" />
            <div className="mt-6 flex flex-wrap gap-2">
              {services.slice(0, 4).map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="rounded-full surface-soft px-3 py-1 text-xs text-soft transition hover:text-brand-500"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[var(--line)] pt-6 text-xs text-soft sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/contact" className="transition hover:text-brand-500">Terms &amp; conditions</Link>
            <Link href="/contact" className="transition hover:text-brand-500">Privacy policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
