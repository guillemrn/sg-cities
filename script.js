document.addEventListener("DOMContentLoaded", function () {
  // --- CÓDIGO PARA LAS CARDS DE BENEFICIOS ("¿Por qué elegir SG Cities?") ---
  const benefitsContainer = document.querySelector(".why-sg-cities__benefits");

  if (benefitsContainer) {
    const benefitsData = [
      {
        iconSrc: "./images/Heart.svg",
        iconAlt: "Icono de corazón representando asesoría",
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
        iconSrc: "./images/Ticket Star.svg",
        iconAlt: "Icono de ticket con estrella representando optimización",
        title: "Optimización de costos",
        text: "Te ayudamos a maximizar tu inversión con estrategias eficientes.",
      },
      {
        iconSrc: "./images/Shield Done.svg",
        iconAlt: "Icono de escudo representando proceso sin complicaciones",
        title: "Proceso sin complicaciones",
        text: "Te guiamos en cada paso, desde la planeación hasta la ejecución.",
      },
      {
        iconSrc: "./images/Location.svg",
        iconAlt: "Icono de ubicación representando red de expertos",
        title: "Red de expertos",
        text: "Contamos con arquitectos, urbanistas y analistas de mercado para un enfoque integral.",
      },
    ];

    function displayBenefitCards() {
      let benefitsHTML = "";
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
        benefitsHTML += benefitCardHTML;
      });
      benefitsContainer.innerHTML = benefitsHTML;
    }
    displayBenefitCards();
  } else {
    console.warn(
      "El contenedor de beneficios (.why-sg-cities__benefits) no fue encontrado.",
    );
  }

  // --- CÓDIGO PARA LAS CARDS DE SOLUCIONES ---
  const solutionsContainer = document.querySelector(".solutions__list");

  if (solutionsContainer) {
    const solutionsData = [
      {
        cardClass: "card1",
        title: "Asesoría inmobiliaria",
        text: "Te ayudamos a encontrar la propiedad ideal, evaluando ubicación, precio y proyección de valor.",
      },
      {
        cardClass: "card2",
        title: "Gestión y planificación de construcción",
        text: "Optimizamos cada etapa del proceso constructivo para garantizar eficiencia y calidad.",
      },
      {
        cardClass: "card3",
        title: "Estudios de mercado inmobiliario",
        text: "Análisis detallado de tendencias, precios y demanda para respaldar cada decisión.",
      },
      {
        cardClass: "card4",
        title: "Estudios de factibilidad",
        text: "Realizamos estudios de impacto urbano, regional, movilidad, de evaluación ambiental y factibilidades técnicas.",
      },
      {
        cardClass: "card5",
        title: "Derecho administrativo",
        text: "Buscamos la solución a los problemas administrativos de los bienes inmuebles y las mejores posibilidades para el aprovechamiento del suelo.",
      },
    ];

    function displaySolutionCards() {
      let solutionsHTML = "";
      solutionsData.forEach((solution) => {
        const solutionCardHTML = `
          <li class="solutions__item ${solution.cardClass}"> 
            <div class="solutions__content">
              <h3 class="solutions__item-title">${solution.title}</h3>
              <p class="solutions__item-text">${solution.text}</p>
            </div>
          </li>
        `;
        solutionsHTML += solutionCardHTML;
      });
      solutionsContainer.innerHTML = solutionsHTML;
    }
    displaySolutionCards();
  } else {
    console.warn(
      "El contenedor de soluciones (.solutions__list) no fue encontrado.",
    );
  }
});
