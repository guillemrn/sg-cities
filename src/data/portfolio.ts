export type PortfolioArea = {
  id: string;
  title: string;
  summary: string;
  image: string;
  services: string[];
};

export const portfolioAreas: PortfolioArea[] = [
  {
    id: "edificacion",
    title: "Proyecto y obra de edificación",
    summary:
      "Coordinación y gestión para llevar un proyecto de edificación hacia una ejecución ordenada.",
    image: "/images/gestion.jpg",
    services: ["Gestión y planificación de obra", "Asesoría inmobiliaria"],
  },
  {
    id: "factibilidades",
    title: "Estudios y factibilidades en proyectos de infraestructura",
    summary:
      "La información que ayuda a valorar una oportunidad antes de comprometer recursos.",
    image: "/images/urban-map.jpg",
    services: [
      "Análisis costo-beneficio",
      "Evaluación económica, ambiental, legal, técnica y social",
      "Gestión de recursos",
    ],
  },
  {
    id: "planeacion",
    title: "Planeación y gestión",
    summary:
      "Lectura de mercado, territorio y normativa para orientar la toma de decisiones.",
    image: "/images/estudios.jpg",
    services: [
      "Derecho administrativo y urbano",
      "Estudios del mercado inmobiliario",
      "Gestión y planificación de obra",
      "Asesoría inmobiliaria",
    ],
  },
  {
    id: "urbanizacion",
    title: "Proyecto y obra de urbanización",
    summary:
      "Planeación de intervenciones que deben responder al territorio y a su infraestructura.",
    image: "/images/admin.jpg",
    services: [],
  },
];
