export type Service = {
  slug: string;
  title: string;
  area: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "analisis-costo-beneficio",
    title: "Análisis costo-beneficio",
    area: "Estudios y factibilidades",
    description:
      "Ordenamos los costos, beneficios y condiciones de una iniciativa para apoyar una decisión informada.",
    bullets: [
      "Identificación de variables relevantes",
      "Comparación de escenarios",
      "Conclusiones para la siguiente etapa",
    ],
  },
  {
    slug: "evaluacion-integral",
    title: "Evaluación económica, ambiental, legal, técnica y social",
    area: "Estudios y factibilidades",
    description:
      "Integramos los ángulos que pueden favorecer o limitar la viabilidad de un proyecto.",
    bullets: [
      "Lectura interdisciplinaria",
      "Identificación de riesgos y dependencias",
      "Recomendaciones de continuidad",
    ],
  },
  {
    slug: "gestion-de-recursos",
    title: "Gestión de recursos",
    area: "Estudios y factibilidades",
    description:
      "Ayudamos a ordenar los recursos necesarios para que la planeación pueda convertirse en acciones.",
    bullets: [
      "Mapeo de necesidades",
      "Priorización de acciones",
      "Seguimiento de avances",
    ],
  },
  {
    slug: "derecho-administrativo-y-urbano",
    title: "Derecho administrativo y urbano",
    area: "Planeación y gestión",
    description:
      "Revisamos las condiciones normativas y administrativas que inciden en el aprovechamiento del suelo.",
    bullets: [
      "Análisis de normativa aplicable",
      "Identificación de trámites y permisos",
      "Orientación para la toma de decisiones",
    ],
  },
  {
    slug: "estudios-de-mercado-inmobiliario",
    title: "Estudios del mercado inmobiliario",
    area: "Planeación y gestión",
    description:
      "Analizamos el contexto de mercado para entender oportunidades, demanda y condiciones de una inversión.",
    bullets: [
      "Lectura de oferta y demanda",
      "Análisis de ubicación y competencia",
      "Síntesis para decisiones de inversión",
    ],
  },
  {
    slug: "gestion-y-planificacion-de-obra",
    title: "Gestión y planificación de obra",
    area: "Proyecto y obra de edificación",
    description:
      "Acompañamos la organización de etapas, recursos y decisiones que sostienen una obra.",
    bullets: [
      "Planeación de etapas",
      "Coordinación de necesidades",
      "Seguimiento de ejecución",
    ],
  },
  {
    slug: "asesoria-inmobiliaria",
    title: "Asesoría inmobiliaria",
    area: "Planeación y gestión",
    description:
      "Acompañamos decisiones relacionadas con propiedades, suelo y oportunidades inmobiliarias.",
    bullets: [
      "Definición del objetivo",
      "Revisión de condiciones del inmueble",
      "Orientación para el siguiente paso",
    ],
  },
  {
    slug: "proyecto-y-obra-de-edificacion",
    title: "Proyecto y obra de edificación",
    area: "Proyecto y obra de edificación",
    description:
      "Conectamos la visión del proyecto con una ruta de planeación y ejecución.",
    bullets: [
      "Definición de alcance",
      "Coordinación de disciplinas",
      "Acompañamiento de ejecución",
    ],
  },
  {
    slug: "proyecto-y-obra-de-urbanizacion",
    title: "Proyecto y obra de urbanización",
    area: "Proyecto y obra de urbanización",
    description:
      "Orientamos proyectos que requieren leer el territorio, la infraestructura y su relación con la ciudad.",
    bullets: [
      "Lectura territorial",
      "Planeación de infraestructura",
      "Coordinación de próximos pasos",
    ],
  },
];
