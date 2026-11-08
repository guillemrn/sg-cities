import type { APIRoute } from "astro";
import { services } from "../data/services";
import { projects } from "../data/projects";

// Sitemap generado en cada build a partir de los datos del sitio.
export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL("https://sgcities.com");
  const urls: { path: string; priority: string }[] = [
    { path: "/", priority: "1.0" },
    { path: "/portafolio/", priority: "0.9" },
    ...projects.map((p) => ({ path: `/proyectos/${p.slug}/`, priority: "0.8" })),
    ...services.map((s) => ({ path: `/servicios/${s.slug}/`, priority: "0.7" })),
    { path: "/terminos-y-condiciones/", priority: "0.3" },
    { path: "/politica-de-privacidad/", priority: "0.3" },
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${new URL(u.path, base).href}</loc><priority>${u.priority}</priority></url>`).join("\n")}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
