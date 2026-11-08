// Estructura del portafolio según el mapa del cliente:
// 4 áreas → 9 secciones (los slugs apuntan a services.ts).

export type PortfolioArea = {
  id: string;
  num: string;
  title: string;
  summary: string;
  image: string;
  services: string[]; // slugs de services.ts
};

export const portfolioAreas: PortfolioArea[] = [
  {
    id: "edificacion",
    num: "01",
    title: "Proyecto y obra de edificación",
    summary:
      "Coordinación y gestión para llevar un proyecto de edificación hacia una ejecución ordenada.",
    image: "/images/gestion.jpg",
    services: ["proyecto-y-obra-de-edificacion"],
  },
  {
    id: "infraestructura",
    num: "02",
    title: "Estudios y factibilidades en proyectos de infraestructura",
    summary:
      "La información que ayuda a valorar una oportunidad antes de comprometer recursos.",
    image: "/images/urban-map.jpg",
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
    image: "/images/estudios.jpg",
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
    image: "/images/admin.jpg",
    services: ["proyecto-y-obra-de-urbanizacion"],
  },
];

// Proyecto destacado (planeación urbana y movilidad). Déjalo en null
// hasta tener la información real; con datos, aparece arriba del portafolio.
export type FeaturedProject = {
  title: string;
  meta: string; // Cliente · Ubicación · Año
  text: string;
  image: string;
  stats: { value: string; label: string }[];
  pdf?: string;
};

export const featuredProject: FeaturedProject | null = null;
