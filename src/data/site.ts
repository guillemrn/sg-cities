// Datos generales del sitio. Rellena lo que esté vacío: los bloques
// que dependen de un dato vacío no se muestran en la página.

export const site = {
  // Experimental: cursor tipo CAD en el hero (solo escritorio). false para apagarlo.
  cadCursor: true,
  // Número en formato internacional sin "+" ni espacios, p. ej. "5213312345678"
  whatsapp: "5213300000000", // TODO: reemplazar por el número real
  facebook: "https://www.facebook.com/SGcities/",
  linkedin: "https://www.linkedin.com/company/sg-cities", // TODO: reemplazar por la URL real
  email: "enrique.delacruz@sgcities.com",
  location: "Guadalajara, Jalisco",
  credit: { name: "Guillermo Moreno", url: "https://guillermoml.com" },
};

export const whatsappUrl = site.whatsapp
  ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Hola, me interesa platicar sobre un proyecto con SG Cities.")}`
  : "";

// Cifras de la franja del hero. Solo datos confirmados por el cliente.
// Ejemplo: { value: "+15", label: "años de experiencia" }
export const stats: { value: string; label: string }[] = [];

export const audiences = [
  {
    title: "Urbanizadoras",
    text: "Planeación, diseño urbano y arquitectónico, y obra.",
  },
  {
    title: "Inversionistas",
    text: "Estudios de mercado y factibilidad antes de invertir.",
  },
  {
    title: "Instituciones educativas",
    text: "Planes de movilidad y transporte escolar con visión integral.",
  },
  {
    title: "Gobiernos locales",
    text: "Factibilidades y modelos de financiamiento para infraestructura pública.",
  },
];

export const clients = [
  { name: "GAT System", logo: "/images/carrousel/gatsystem.png" },
  { name: "EPS", logo: "/images/carrousel/logo eps.png" },
  { name: "Cliente SG Cities", logo: "/images/carrousel/logo4.png" },
  { name: "Polymetrix", logo: "/images/carrousel/polymetrix.png" },
  { name: "Universidad de Guadalajara", logo: "/images/carrousel/universidad-de-guadalajara.png" },
  // Pendiente: agregar logo de IMEPLAN en /public/images/carrousel/
];
