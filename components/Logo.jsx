import Link from "next/link";

export default function Logo({ compact = false }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label="Deem Hospital home">
      <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-500/30 transition group-hover:scale-105">
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
          <path d="M12 6v12M6 12h12" />
        </svg>
      </span>
      {!compact && (
        <span className="font-display text-lg font-semibold tracking-tight">
          Deem<span className="text-brand-500"> Hospital</span>
        </span>
      )}
    </Link>
  );
}
