import Link from "next/link";
import Icon from "./Icon";

export function Eyebrow({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-[var(--line)] surface-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-500 ${className}`}>
      <Icon name="sparkle" className="size-3.5" />
      {children}
    </span>
  );
}

export function SectionHeading({ eyebrow, title, lead, align = "left", className = "" }) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {lead && <p className="mt-4 text-base leading-relaxed text-soft">{lead}</p>}
    </div>
  );
}

export function Button({ href, children, variant = "primary", className = "", icon = "arrow", ...rest }) {
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition";
  const variants = {
    primary: "bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-600",
    dark: "bg-ink-900 text-white hover:bg-ink-700",
    soft: "surface border border-[var(--line)] hover:border-brand-300 hover:text-brand-500",
    light: "bg-white text-ink-900 hover:bg-brand-50",
    ghost: "text-brand-500 hover:text-brand-600 px-0",
  };
  const content = (
    <>
      {children}
      {icon && <Icon name={icon} className="size-4 transition group-hover:translate-x-0.5" />}
    </>
  );
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} {...rest}>
        {content}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {content}
    </button>
  );
}

export function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 70% at 15% 0%, rgba(74,108,247,0.16), transparent 60%), radial-gradient(50% 60% at 90% 10%, rgba(74,108,247,0.1), transparent 60%)",
        }}
      />
      <div className="shell py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl rise">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
          {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-soft">{lead}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}

export function Pill({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-full surface-soft px-3 py-1 text-xs font-medium text-soft ${className}`}>
      {children}
    </span>
  );
}
