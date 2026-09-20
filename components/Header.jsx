"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import Icon from "./Icon";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50">
      <div className="hidden bg-ink-900 text-white/80 md:block">
        <div className="shell flex h-9 items-center justify-between text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <Icon name="pin" className="size-3.5" /> {site.address}
            </span>
            <span className="flex items-center gap-1.5">
              <Icon name="clock" className="size-3.5" /> {site.hours}
            </span>
          </div>
          <a href={`tel:${site.emergency.replace(/\s/g, "")}`} className="flex items-center gap-1.5 font-medium text-white transition hover:text-brand-300">
            <Icon name="ambulance" className="size-3.5" /> Emergency {site.emergency}
          </a>
        </div>
      </div>

      <div
        className={`border-b transition-all duration-300 ${
          scrolled ? "border-[var(--line)] surface/90 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
        style={scrolled ? { backgroundColor: "color-mix(in srgb, var(--surface) 82%, transparent)" } : undefined}
      >
        <div className="shell flex h-16 items-center justify-between gap-4">
          <Logo />

          <nav className="hidden items-center gap-1 rounded-full border border-[var(--line)] surface-soft p-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "bg-brand-500 text-white shadow-md shadow-brand-500/25"
                    : "text-soft hover:text-brand-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle className="hidden sm:grid" />
            <Link
              href="/appointment"
              className="hidden rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:bg-brand-600 sm:inline-flex"
            >
              Book appointment
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid size-10 place-items-center rounded-full border border-[var(--line)] surface lg:hidden"
            >
              <Icon name={open ? "close" : "menu"} className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-40 surface lg:hidden">
          <div className="shell flex h-full flex-col gap-2 overflow-y-auto py-6">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between rounded-2xl px-4 py-4 text-lg font-medium transition ${
                  isActive(item.href) ? "surface-soft text-brand-500" : "text-soft"
                }`}
              >
                {item.label}
                <Icon name="arrowUpRight" className="size-4" />
              </Link>
            ))}
            <Link
              href="/appointment"
              className="mt-2 rounded-2xl bg-brand-500 px-4 py-4 text-center text-lg font-semibold text-white"
            >
              Book appointment
            </Link>
            <div className="mt-4 flex items-center justify-between rounded-2xl surface-soft px-4 py-4">
              <span className="text-sm text-soft">Appearance</span>
              <ThemeToggle />
            </div>
            <a
              href={`tel:${site.emergency.replace(/\s/g, "")}`}
              className="mt-auto flex items-center justify-center gap-2 rounded-2xl border border-[var(--line)] px-4 py-4 text-sm font-semibold"
            >
              <Icon name="ambulance" className="size-4 text-brand-500" /> Emergency {site.emergency}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
