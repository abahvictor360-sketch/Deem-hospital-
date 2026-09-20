import { Button } from "@/components/ui";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="shell flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-semibold text-brand-500">404</p>
      <h1 className="mt-6 text-3xl font-semibold sm:text-4xl">We could not find that page</h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-soft">
        The link may be out of date. Try our services, find a consultant, or head back to the homepage.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Back to homepage</Button>
        <Button href="/services" variant="soft">Browse services</Button>
      </div>
    </section>
  );
}
