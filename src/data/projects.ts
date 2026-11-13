// Proyectos del portafolio. Cada uno pertenece a un servicio (services.ts).
// Fotos optimizadas en /public/portfolio/<area>/<proyecto>/ (originales en /material-original).

export type ProjectItem = {
  slug: string;
  service: string; // slug del servicio
  name: string;
  period: string;
  location: string;
  summary: string;
  description: string[];
  cover: string;
  stats: { value: string; label: string }[];
  tags: string[];
  gallery: { src: string; alt: string }[];
  video?: { src: string; poster: string; label: string };
  credits?: string[];
  // Fotos para la banda de "Proyecto destacado" del Home (de la obra al resultado)
  featureShots?: { src: string; alt: string; label: string }[];
  // Portada de la página del proyecto: "full" = una foto a todo lo ancho (ideal para fotos horizontales);
  // por defecto usa las featureShots en diagonal (mejor para fotos verticales de celular).
  heroLayout?: "full" | "split";
};

const p = (project: string, file: string) => `/portfolio/edificacion/${project}/${file}.webp`;

export const projects: ProjectItem[] = [
  {
    slug: "living-segovia",
    service: "proyecto-y-obra-de-edificacion",
    name: "Living Segovia",
    period: "Enero 2025 – octubre 2026",
    location: "Col. Atlas, Guadalajara, Jalisco",
    summary:
      "Edificio habitacional de seis niveles con 12 departamentos, sótano de estacionamiento y roof de amenidades.",
    description: [
      "Living Segovia es un edificio habitacional vertical plurifamiliar de seis niveles para 12 departamentos y sótano de estacionamiento, en la colonia Atlas de Guadalajara.",
      "El sistema constructivo se basa en una estructura de acero con un módulo central de concreto armado para el cubo del elevador, con capacidad para 8 personas y acceso directo a cada departamento desde el sótano hasta las amenidades en el roof. La cimentación es de zapatas y trabes de liga de concreto armado, con columnas y trabes de acero y entrepisos de losacero. Los muros interiores y perimetrales son de block de concreto celular.",
      "El edificio se posiciona como un detonador de plusvalor urbano en uno de los ejes de transformación más dinámicos de Guadalajara, cerca del Boulevard Marcelino García Barragán, corredor que articula el Centro Metropolitano con San Pedro Tlaquepaque.",
      "Aporta a este corredor capacidad habitacional y un estándar de vivienda media con acabados de alta calidad, que eleva la oferta residencial del sector y contribuye a revalorizar el suelo urbano y su entorno.",
    ],
    cover: p("living-segovia", "fachada-exterior"),
    stats: [
      { value: "6", label: "niveles" },
      { value: "12", label: "departamentos" },
      { value: "1,190 m²", label: "de construcción" },
    ],
    tags: ["Vivienda vertical", "Estructura de acero", "Densificación urbana"],
    gallery: [
      { src: p("living-segovia", "movimiento-de-tierras"), alt: "Movimiento de tierras" },
      { src: p("living-segovia", "zapatas-y-trabes-de-liga"), alt: "Zapatas y trabes de liga" },
      { src: p("living-segovia", "armado-zapatas-dados-y-trabes-de-liga-2"), alt: "Armado de zapatas, dados y trabes de liga" },
      { src: p("living-segovia", "cimbra-de-cimentacion"), alt: "Cimbra de cimentación" },
      { src: p("living-segovia", "armado-del-cuerpo-del-elevador"), alt: "Armado del cuerpo del elevador" },
      { src: p("living-segovia", "montaje-de-estructura-de-acero-y-cimbra-cuerpo-elevador"), alt: "Montaje de estructura de acero y cimbra del elevador" },
      { src: p("living-segovia", "exterior-en-proceso-de-construccion-estructura"), alt: "Estructura en proceso" },
      { src: p("living-segovia", "exterior-en-proceso-de-construccion-fachada"), alt: "Fachada en proceso" },
      { src: p("living-segovia", "cubo-de-luz-interior"), alt: "Cubo de luz interior" },
      { src: p("living-segovia", "fachada-exterior"), alt: "Fachada terminada" },
    ],
    video: {
      src: "/portfolio/edificacion/living-segovia/video-interior-departamento.mp4",
      poster: p("living-segovia", "video-interior-departamento-poster"),
      label: "Recorrido interior de un departamento",
    },
    credits: ["Ingeniería estructural: OM Estructuristas"],
    featureShots: [
      { src: p("living-segovia", "exterior-en-proceso-de-construccion-estructura"), alt: "Living Segovia durante la obra: estructura de acero y cubo del elevador", label: "Obra · 2025" },
      { src: p("living-segovia", "fachada-exterior"), alt: "Fachada terminada de Living Segovia", label: "Terminado · 2026" },
    ],
  },
  {
    slug: "silly-billy-house",
    service: "proyecto-y-obra-de-edificacion",
    name: "Silly Billy House",
    period: "Noviembre 2025 – junio 2026",
    location: "Guadalajara, Jalisco", // TODO: confirmar ubicación
    // TODO: el cliente aún no envía la descripción de este proyecto.
    summary: "Proyecto integral de fachada, interiores y espacios comunes.",
    description: [],
    cover: p("silly-billy-house", "render-perspectiva-aerea"),
    heroLayout: "full",
    stats: [],
    tags: ["Proyecto integral", "Interiorismo"],
    gallery: [
      { src: p("silly-billy-house", "fachada-terminada"), alt: "Fachada terminada" },
      { src: p("silly-billy-house", "render-fachada"), alt: "Render de fachada" },
      { src: p("silly-billy-house", "closeup-lobby"), alt: "Lobby" },
      { src: p("silly-billy-house", "patio-acceso"), alt: "Patio de acceso" },
      { src: p("silly-billy-house", "pasillo-escaleras"), alt: "Pasillo y escaleras" },
      { src: p("silly-billy-house", "recamara"), alt: "Recámara" },
      { src: p("silly-billy-house", "habitacion-escritorio"), alt: "Habitación con escritorio" },
      { src: p("silly-billy-house", "habitacion-lavabo-ventana"), alt: "Habitación" },
      { src: p("silly-billy-house", "bano-regadera"), alt: "Baño" },
      { src: p("silly-billy-house", "regadera-azulejo-verde"), alt: "Regadera con azulejo verde" },
      { src: p("silly-billy-house", "terraza"), alt: "Terraza" },
      { src: p("silly-billy-house", "cerradura-digital"), alt: "Cerradura digital" },
    ],
  },
  {
    slug: "bodegas-san-juan-de-dios",
    service: "proyecto-y-obra-de-edificacion",
    name: "Bodegas San Juan de Dios",
    period: "Junio – diciembre 2024",
    location: "Barrio de San Juan de Dios, Guadalajara",
    summary:
      "Reciclaje arquitectónico de una vivienda para bodegas y locales comerciales en un barrio histórico.",
    description: [
      "Intervención en una vivienda en las orillas de los barrios de San Juan de Dios y Oblatos para su uso como bodegas y locales comerciales. Un ejercicio de reciclaje arquitectónico y readaptación funcional dentro de la trama urbana consolidada del barrio.",
      "El proyecto conserva y restaura una fracción de la vivienda original, que también se destina a local y bodega. Las dos terceras partes restantes de la finca, sin valor arquitectónico, se demolieron para liberar el predio y darle una nueva configuración.",
      "Su principal aporte al paisaje urbano es una obra sobria, centrada en una intervención acentuada en los vanos que reinterpreta las proporciones y ritmos del contexto. Dialoga con la morfología histórica del barrio y se inserta con discreción en una zona de alta afluencia peatonal, donde la mezcla de vivienda, comercio y almacenamiento refuerza la vida social y económica de San Juan de Dios.",
    ],
    cover: p("bodegas-san-juan-de-dios", "detalle-fachada-2"),
    featureShots: [
      { src: p("bodegas-san-juan-de-dios", "demolicion-1"), alt: "Demolición parcial de la vivienda original", label: "Obra · 2024" },
      { src: p("bodegas-san-juan-de-dios", "detalle-fachada-2"), alt: "Detalle de la fachada intervenida", label: "Fachada · 2024" },
    ],
    stats: [],
    tags: ["Reciclaje arquitectónico", "Uso mixto", "Barrio histórico"],
    gallery: [
      { src: p("bodegas-san-juan-de-dios", "demolicion-1"), alt: "Demolición parcial" },
      { src: p("bodegas-san-juan-de-dios", "demolicion-2"), alt: "Predio liberado" },
      { src: p("bodegas-san-juan-de-dios", "armado-zapata-corrida"), alt: "Armado de zapata corrida" },
      { src: p("bodegas-san-juan-de-dios", "losa-aligerada-1"), alt: "Losa aligerada" },
      { src: p("bodegas-san-juan-de-dios", "losa-aligerada-2"), alt: "Losa aligerada" },
      { src: p("bodegas-san-juan-de-dios", "trabe-de-refuerzo"), alt: "Trabe de refuerzo" },
      { src: p("bodegas-san-juan-de-dios", "fachada-en-proceso"), alt: "Fachada en proceso" },
      { src: p("bodegas-san-juan-de-dios", "cortinas-frontales"), alt: "Cortinas frontales" },
      { src: p("bodegas-san-juan-de-dios", "detalle-fachada-1"), alt: "Detalle de fachada" },
      { src: p("bodegas-san-juan-de-dios", "detalle-fachada-2"), alt: "Detalle de fachada" },
    ],
  },
];

export const projectsFor = (service: string) => projects.filter((x) => x.service === service);
