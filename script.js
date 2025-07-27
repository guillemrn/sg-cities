document.addEventListener("DOMContentLoaded", function () {
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

  document.addEventListener("DOMContentLoaded", function () {
    // ... tu código para cargar header/footer ...
    // ... tu código para la galería de servicios ...

    // --- INICIALIZACIÓN DEL CARRUSEL DE LOGOS ---
    if (document.querySelector(".logo-swiper")) {
      const logoSwiper = new Swiper(".logo-swiper", {
        // Opciones del carrusel
        loop: true, // Para que sea un bucle infinito
        autoplay: {
          delay: 2500, // Tiempo entre cada slide en milisegundos
          disableOnInteraction: false, // El autoplay no se detiene si el usuario interactúa
        },
        slidesPerView: 2, // Logos visibles en pantallas muy pequeñas
        spaceBetween: 30, // Espacio entre logos

        // Puntos de ruptura para hacerlo responsivo
        breakpoints: {
          // Cuando el ancho de la pantalla sea >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          // Cuando el ancho de la pantalla sea >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          // Cuando el ancho de la pantalla sea >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 60,
          },
        },
      });
    }
  });
});

// --- CÓDIGO PARA LAS CARDS DE SOLUCIONES (MODIFICADO) ---

// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  const solutionsContainer = document.querySelector(".solutions__list");

  if (solutionsContainer) {
    // DATOS ENRIQUECIDOS: Añadimos 'link' y 'imageUrl' para cada solución.
    // DEBERÁS REEMPLAZAR 'URL_DE_TU_IMAGEN_X.jpg' con las rutas reales.
    const solutionsData = [
      {
        title: "Asesoría inmobiliaria",
        text: "Te ayudamos a encontrar la propiedad ideal, evaluando ubicación, precio y proyección de valor.",
        link: "/asesoria-inmobiliaria.html", // Página de destino
        imageUrl: "./images/compra.jpg", // Imagen de fondo
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

    function displaySolutionCards() {
      let solutionsHTML = "";
      solutionsData.forEach((solution) => {
        // PLANTILLA MODIFICADA: Ahora generamos un <a> dentro de cada <li>
        // La clase .solutions__item y la imagen de fondo se aplican al enlace <a>
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
    }

    displaySolutionCards();
  } else {
    console.warn(
      "El contenedor de soluciones (.solutions__list) no fue encontrado.",
    );
  }

  // --- INICIALIZACIÓN DEL CARRUSEL DE LOGOS ---
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

  // --- CÓDIGO PARA LA GALERÍA DE SERVICIOS (LIGHTBOX) ---
  // Este código se aplica a las páginas de servicios, no al index,
  // pero es bueno mantenerlo dentro del mismo listener para consistencia.
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
