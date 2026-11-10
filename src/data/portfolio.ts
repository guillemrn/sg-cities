// Estructura del portafolio según el mapa del cliente:
// 4 áreas → 9 secciones (los slugs apuntan a services.ts).

export type PortfolioArea = {
  id: string;
  num: string;
  title: string;
  summary: string;
  image?: string; // vacío = sin foto real todavía
  services: string[]; // slugs de services.ts
};

export const portfolioAreas: PortfolioArea[] = [
  {
    id: "edificacion",
    num: "01",
    title: "Proyecto y obra de edificación",
    summary:
      "Coordinación y gestión para llevar un proyecto de edificación hacia una ejecución ordenada.",
    image: "/portfolio/edificacion/living-segovia/fachada-exterior.webp",
    services: ["proyecto-y-obra-de-edificacion"],
  },
  {
    id: "infraestructura",
    num: "02",
    title: "Estudios y factibilidades en proyectos de infraestructura",
    summary:
      "La información que ayuda a valorar una oportunidad antes de comprometer recursos.",
    // image: "/images/urban-map.webp", // STOCK: reemplazar cuando el cliente mande fotos reales
    services: [
      "analisis-costo-beneficio",
      "evaluacion-integral",
      "gestion-de-recursos",
    ],
  },
  {
    id: "planificacion",
    num: "03",
    title: "Planificación y gestión",
    summary:
      "Lectura de mercado, territorio y normativa para orientar la toma de decisiones.",
    // image: "/images/estudios.webp", // STOCK: reemplazar cuando el cliente mande fotos reales
    services: [
      "derecho-administrativo-y-urbano",
      "estudios-de-mercado-inmobiliario",
      "gestion-y-planificacion-de-obra",
      "asesoria-inmobiliaria",
    ],
  },
  {
    id: "urbanizacion",
    num: "04",
    title: "Proyecto y obra de urbanización",
    summary:
      "Planeación de intervenciones que deben responder al territorio y a su infraestructura.",
    // image: "/images/admin.webp", // STOCK: reemplazar cuando el cliente mande fotos reales
    services: ["proyecto-y-obra-de-urbanizacion"],
  },
];

// Proyecto destacado del portafolio: slug de un proyecto en projects.ts (o null).
export const featuredProjectSlug: string | null = "living-segovia";

// Un área se muestra en el portafolio solo si tiene proyectos reales (projects.ts).
// En cuanto se agregue un proyecto a uno de sus servicios, aparece sola.
import { projectsFor } from "./projects";
export const servicesWithProjects = (area: PortfolioArea) =>
  area.services.filter((slug) => projectsFor(slug).length > 0);
export const hasProjects = (area: PortfolioArea) => servicesWithProjects(area).length > 0;
