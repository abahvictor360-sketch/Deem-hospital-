import { doctors, posts, services, site } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const staticRoutes = ["", "/services", "/doctors", "/about", "/blog", "/contact", "/appointment"];
  return [
    ...staticRoutes.map((r) => ({ url: `${site.url}${r}`, lastModified: now, priority: r === "" ? 1 : 0.8 })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: now, priority: 0.7 })),
    ...doctors.map((d) => ({ url: `${site.url}/doctors/${d.slug}`, lastModified: now, priority: 0.6 })),
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.date), priority: 0.6 })),
  ];
}
