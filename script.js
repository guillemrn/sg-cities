document.addEventListener("DOMContentLoaded", function () {
  // --- 1. SECCIÓN DE BENEFICIOS (WHY SG CITIES) ---
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
  } else {
    // Solo advertir si estamos en la página principal donde debería existir
    if (document.querySelector(".why-sg-cities")) {
        console.warn("El contenedor de beneficios (.why-sg-cities__benefits) no fue encontrado.");
    }
  }

  // --- 2. SECCIÓN DE SOLUCIONES (CARDS) ---
  const solutionsContainer = document.querySelector(".solutions__list");

  if (solutionsContainer) {
    const solutionsData = [
      {
        title: "Asesoría inmobiliaria",
        text: "Te ayudamos a encontrar la propiedad ideal, evaluando ubicación, precio y proyección de valor.",
        link: "/asesoria-inmobiliaria.html",
        imageUrl: "./images/compra.jpg",
      },
      {
        title: "Gestión y planificación de construcción",
        text: "Optimizamos cada etapa del proceso constructivo para garantizar eficiencia y calidad.",
        link: "/gestion-construccion.html",
        imageUrl: "./images/gestion.jpg",
      },
      {
        title: "Estudios de mercado inmobiliario",
        text: "Análisis detallado de tendencias, precios y demanda para respaldar cada decisión.",
        link: "/estudios-mercado.html",
        imageUrl: "./images/estudios.jpg",
      },
      {
        title: "Estudios de factibilidad",
        text: "Realizamos estudios de impacto urbano, regional, movilidad, de evaluación ambiental y factibilidades técnicas.",
        link: "/estudios-factibilidad.html",
        imageUrl: "./images/urban-map.jpg",
      },
      {
        title: "Derecho administrativo",
        text: "Buscamos la solución a los problemas administrativos de los bienes inmuebles y las mejores posibilidades para el aprovechamiento del suelo.",
        link: "/derecho-administrativo.html",
        imageUrl: "./images/admin.jpg",
      },
    ];

    let solutionsHTML = "";
    solutionsData.forEach((solution) => {
      const solutionCardHTML = `
            <li> 
                <a href="${solution.link}" 
                   class="solutions__item" 
                   style="background-image: url('${solution.imageUrl}');"
                   aria-label="Más información sobre ${solution.title}">
                    <div class="solutions__content">
                        <h3 class="solutions__item-title">${solution.title}</h3>
                        <p class="solutions__item-text">${solution.text}</p>
                    </div>
                </a>
            </li>
        `;
      solutionsHTML += solutionCardHTML;
    });
    solutionsContainer.innerHTML = solutionsHTML;
  } else {
      if (document.querySelector(".solutions")) {
        console.warn("El contenedor de soluciones (.solutions__list) no fue encontrado.");
      }
  }

  // --- 3. CARRUSEL DE LOGOS (SWIPER) ---
  if (document.querySelector(".logo-swiper")) {
    const logoSwiper = new Swiper(".logo-swiper", {
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      slidesPerView: 2,
      spaceBetween: 30,
      breakpoints: {
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 60,
        },
      },
    });
  }

  // --- 4. GALERÍA DE SERVICIOS (LIGHTBOX) ---
  if (document.getElementById("static-gallery")) {
    var galleryLightboxSwiper = new Swiper(".gallery-main", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const lightbox = document.querySelector(".gallery-lightbox");
    const closeButton = document.querySelector(".gallery-lightbox__close");
    const gridImages = document.querySelectorAll("#static-gallery a");

    gridImages.forEach((imgLink) => {
      imgLink.addEventListener("click", function (event) {
        event.preventDefault();
        const slideIndex = parseInt(this.dataset.index, 10);
        galleryLightboxSwiper.slideTo(slideIndex, 0);
        lightbox.classList.add("is-active");
      });
    });

    closeButton.addEventListener("click", function () {
      lightbox.classList.remove("is-active");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        lightbox.classList.remove("is-active");
      }
    });
  }
});

