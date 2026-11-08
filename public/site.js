document.addEventListener("DOMContentLoaded", function () {
  const benefitsContainer = document.querySelector(".why-sg-cities__benefits");
  if (benefitsContainer) {
    const benefitsData = [
      [
        "Heart.svg",
        "Icono de corazón representando asesoría",
        "Asesoría personalizada",
        "Recibe orientación según tu proyecto y necesidades.",
      ],
      [
        "Star.svg",
        "Icono de estrella representando experiencia",
        "Experiencia en el sector",
        "Conocimiento profundo del mercado urbano e inmobiliario.",
      ],
      [
        "Graph.svg",
        "Icono de gráfica representando datos",
        "Datos que respaldan decisiones",
        "Estudios de mercado que garantizan inversiones seguras.",
      ],
      [
        "Ticket Star.svg",
        "Icono de ticket con estrella representando optimización",
        "Optimización de costos",
        "Te ayudamos a maximizar tu inversión con estrategias eficientes.",
      ],
      [
        "Shield Done.svg",
        "Icono de escudo representando proceso sin complicaciones",
        "Proceso sin complicaciones",
        "Te guiamos en cada paso, desde la planeación hasta la ejecución.",
      ],
      [
        "Location.svg",
        "Icono de ubicación representando red de expertos",
        "Red de expertos",
        "Contamos con arquitectos, urbanistas y analistas de mercado para un enfoque integral.",
      ],
    ];
    benefitsContainer.innerHTML = benefitsData
      .map(
        ([icon, alt, title, text]) =>
          `<li class="why-sg-cities__benefit"><figure class="why-sg-cities__benefit-icon"><img src="/images/${icon}" alt="${alt}" /></figure><div><h3 class="why-sg-cities__benefit-title">${title}</h3><p class="why-sg-cities__benefit-text">${text}</p></div></li>`,
      )
      .join("");
  }

  const solutionsContainer = document.querySelector(".solutions__list");
  if (solutionsContainer) {
    const solutionsData = [
      [
        "Asesoría inmobiliaria",
        "Te ayudamos a encontrar la propiedad ideal, evaluando ubicación, precio y proyección de valor.",
        "/servicios/asesoria-inmobiliaria",
        "/images/compra.jpg",
      ],
      [
        "Gestión y planificación de construcción",
        "Optimizamos cada etapa del proceso constructivo para garantizar eficiencia y calidad.",
        "/servicios/gestion-y-planificacion-de-obra",
        "/images/gestion.jpg",
      ],
      [
        "Estudios de mercado inmobiliario",
        "Análisis detallado de tendencias, precios y demanda para respaldar cada decisión.",
        "/servicios/estudios-de-mercado-inmobiliario",
        "/images/estudios.jpg",
      ],
      [
        "Estudios de factibilidad",
        "Realizamos estudios de impacto urbano, regional, movilidad, de evaluación ambiental y factibilidades técnicas.",
        "/servicios/evaluacion-integral",
        "/images/urban-map.jpg",
      ],
      [
        "Derecho administrativo",
        "Buscamos la solución a los problemas administrativos de los bienes inmuebles y las mejores posibilidades para el aprovechamiento del suelo.",
        "/servicios/derecho-administrativo-y-urbano",
        "/images/admin.jpg",
      ],
    ];
    solutionsContainer.innerHTML = solutionsData
      .map(
        ([title, text, link, image]) =>
          `<li><a href="${link}" class="solutions__item" style="background-image: url('${image}');" aria-label="Más información sobre ${title}"><div class="solutions__content"><h3 class="solutions__item-title">${title}</h3><p class="solutions__item-text">${text}</p></div></a></li>`,
      )
      .join("");
  }

  if (window.Swiper && document.querySelector(".logo-swiper")) {
    new Swiper(".logo-swiper", {
      loop: true,
      autoplay: { delay: 2500, disableOnInteraction: false },
      slidesPerView: 2,
      spaceBetween: 30,
      breakpoints: {
        640: { slidesPerView: 3, spaceBetween: 40 },
        768: { slidesPerView: 4, spaceBetween: 50 },
        1024: { slidesPerView: 5, spaceBetween: 60 },
      },
    });
  }

  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");
  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.classList.toggle("is-active");
      nav.classList.toggle("is-active", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => {
        hamburger.classList.remove("is-active");
        nav.classList.remove("is-active");
        hamburger.setAttribute("aria-expanded", "false");
      }),
    );
  }

  document.querySelectorAll(".js-make-form").forEach((form) => {
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      const submit = form.querySelector("button[type='submit']");
      const payload = Object.fromEntries(new FormData(form));
      if (payload.website) return;
      submit.disabled = true;
      status.textContent = "Enviando solicitud…";
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) throw new Error("contact request failed");
        window.location.href = form.dataset.successUrl || "/gracias";
      } catch {
        submit.disabled = false;
        status.textContent =
          "No pudimos enviar la solicitud. Intenta de nuevo o escríbenos por WhatsApp.";
        status.className = "form-status is-error";
      }
    });
  });
});
