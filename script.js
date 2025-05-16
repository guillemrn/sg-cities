document.addEventListener("DOMContentLoaded", function () {
  // Asegúrate de que el DOM esté completamente cargado

  const benefitsContainer = document.querySelector(".why-sg-cities__benefits");

  // 1. Define los datos de tus cards de beneficios
  const benefitsData = [
    {
      iconSrc: "./images/Heart.svg",
      iconAlt: "Icono de corazón representando asesoría", // Mejorando el alt text
      title: "Asesoría personalizada",
      text: "Recibe orientación según tu proyecto y necesidades.",
    },
    {
      iconSrc: "./images/Star.svg",
      iconAlt: "Icono de estrella representando experiencia",
      title: "Experiencia en el sector",
      text: "Conocimiento profundo del mercado urbano e inmobiliario.",
    },
    {
      iconSrc: "./images/Graph.svg",
      iconAlt: "Icono de gráfica representando datos",
      title: "Datos que respaldan decisiones",
      text: "Estudios de mercado que garantizan inversiones seguras.",
    },
    {
      iconSrc: "./images/Ticket Star.svg", // Asumo que este es el nombre correcto del archivo
      iconAlt: "Icono de ticket con estrella representando optimización",
      title: "Optimización de costos",
      text: "Te ayudamos a maximizar tu inversión con estrategias eficientes.",
    },
    {
      iconSrc: "./images/Shield Done.svg", // Asumo que este es el nombre correcto del archivo
      iconAlt: "Icono de escudo representando proceso sin complicaciones",
      title: "Proceso sin complicaciones",
      text: "Te guiamos en cada paso, desde la planeación hasta la ejecución.",
    },
    {
      iconSrc: "./images/Location.svg",
      iconAlt: "Icono de ubicación representando red de expertos",
      title: "Red de expertos",
      text: "Contamos con arquitectos, urbanistas, ingenieros ambientales especialistas del derecho urbano como parte del equipo multidisciplinario para un enfoque integral",
    },
  ];

  // 2. Función para generar el HTML de cada card y agregarlas al contenedor
  function displayBenefitCards() {
    if (!benefitsContainer) {
      console.error("El contenedor de beneficios no fue encontrado.");
      return;
    }

    let benefitsHTML = ""; // Variable para acumular el HTML de todas las cards

    benefitsData.forEach((benefit) => {
      const benefitCardHTML = `
        <li class="why-sg-cities__benefit">
          <figure class="why-sg-cities__benefit-icon">
            <img src="${benefit.iconSrc}" alt="${benefit.iconAlt}" />
          </figure>
          <div>
            <h3 class="why-sg-cities__benefit-title">${benefit.title}</h3>
            <p class="why-sg-cities__benefit-text">${benefit.text}</p>
          </div>
        </li>
      `;
      benefitsHTML += benefitCardHTML; // Agrega la card actual al acumulador
    });

    benefitsContainer.innerHTML = benefitsHTML; // Inserta todo el HTML generado en el contenedor
  }

  // 3. Llama a la función para mostrar las cards
  displayBenefitCards();
});
