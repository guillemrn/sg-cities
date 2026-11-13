document.addEventListener("DOMContentLoaded", function () {
  // Menú móvil
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".site-nav");
  if (hamburger && nav) {
    const header = document.querySelector(".site-header");
    const outside = () => document.querySelectorAll("main, footer");
    const setOpen = (open, { returnFocus = true } = {}) => {
      if (open) nav.style.setProperty("--nav-top", `${Math.round(header.getBoundingClientRect().bottom)}px`);
      hamburger.classList.toggle("is-active", open);
      nav.classList.toggle("is-active", open);
      document.documentElement.classList.toggle("menu-open", open);
      hamburger.setAttribute("aria-expanded", String(open));
      hamburger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      // Mientras el menú está abierto, el resto de la página no es navegable
      outside().forEach((el) => (open ? el.setAttribute("inert", "") : el.removeAttribute("inert")));
      if (open) {
        // El foco va al panel (sin marco visible); con Tab se recorren los enlaces
        nav.setAttribute("tabindex", "-1");
        setTimeout(() => nav.focus({ preventScroll: true }), 150);
      }
      else if (returnFocus) hamburger.focus({ preventScroll: true });
    };
    hamburger.addEventListener("click", () => setOpen(!nav.classList.contains("is-active")));
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false, { returnFocus: false })));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-active")) setOpen(false);
    });
    // Si se gira la pantalla o se agranda a escritorio, se cierra
    matchMedia("(min-width: 901px)").addEventListener("change", (e) => e.matches && setOpen(false, { returnFocus: false }));
  }

  // Formularios → /api/contact → Make
  document.querySelectorAll(".js-make-form").forEach((form) => {
    const status = form.querySelector(".form-status");
    const submit = form.querySelector("button[type='submit']");
    const submitText = submit.querySelector(".button__text") || submit;
    const defaultText = submitText.textContent;
    form.elements.t && (form.elements.t.value = String(Date.now()));
    form.elements.origen && (form.elements.origen.value = location.pathname + location.search);

    // Fecha de la "hoja" y pista del mensaje según el área
    const sheet = form.closest(".sheet");
    const dateEl = sheet?.querySelector(".js-sheet-date");
    if (dateEl) dateEl.textContent = new Date().toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
    const hints = form.dataset.hints ? JSON.parse(form.dataset.hints) : null;
    const areaSelect = form.elements.area;
    const updateHint = () => {
      if (!hints || !areaSelect || !form.elements.mensaje) return;
      const id = areaSelect.selectedOptions[0]?.dataset.id || "";
      form.elements.mensaje.placeholder = hints[id] || hints[""];
    };
    areaSelect?.addEventListener("change", updateHint);

    // Preselecciona el área si viene de un servicio o proyecto (?area=planificacion)
    const area = new URLSearchParams(location.search).get("area");
    if (area) {
      const opt = form.querySelector(`select[name="area"] option[data-id="${CSS.escape(area)}"]`);
      if (opt) opt.selected = true;
    }
    updateHint();

    const setError = (el, msgEl, show) => {
      if (msgEl) msgEl.hidden = !show;
      el.setAttribute("aria-invalid", String(show));
      el.closest(".cell")?.classList.toggle("is-invalid", show);
    };

    function validate() {
      const invalid = [];
      ["nombre", "email", "mensaje"].forEach((name) => {
        const input = form.elements[name];
        const ok = name === "email" ? /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim()) : input.value.trim().length > 1;
        setError(input, form.querySelector(`#err-${name}`), !ok);
        if (!ok) invalid.push(input);
      });
      return invalid;
    }

    // Limpia el error en cuanto la persona corrige
    form.addEventListener("input", (e) => {
      if (e.target.getAttribute("aria-invalid") === "true") setError(e.target, form.querySelector(`#err-${e.target.name}`), false);
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const payload = Object.fromEntries(new FormData(form));
      if (payload.website) return;
      const invalid = validate();
      if (invalid.length) {
        status.textContent = "Faltan algunos datos. Revisa los campos marcados.";
        status.className = "form-status is-error";
        invalid[0].focus();
        return;
      }
      submit.disabled = true;
      submit.classList.add("is-loading");
      submitText.textContent = "Enviando…";
      status.textContent = "";
      status.className = "form-status";
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(payload),
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok) {
          const error = new Error(result.error || "contact request failed");
          error.status = response.status;
          throw error;
        }
        const go = () => (window.location.href = form.dataset.successUrl || "/gracias");
        if (sheet) {
          sheet.classList.add("is-sent");
          setTimeout(go, matchMedia("(prefers-reduced-motion: reduce)").matches ? 300 : 1100);
        } else go();
      } catch (error) {
        submit.disabled = false;
        submit.classList.remove("is-loading");
        submitText.textContent = defaultText;
        status.textContent = error.status === 400
          ? "La sesión del formulario expiró. Recarga la página e inténtalo de nuevo."
          : error.status === 429
            ? "Recibimos demasiados intentos desde esta conexión. Espera unos minutos e inténtalo de nuevo."
            : error.status === 502
              ? "No pudimos conectar con el servicio de recepción. Intenta de nuevo en unos minutos."
              : error.status === 503
                ? "El formulario está temporalmente fuera de servicio. Escríbenos por WhatsApp."
                : "No pudimos conectar con el servidor. Revisa tu conexión e inténtalo de nuevo.";
        status.className = "form-status is-error";
      }
    });
  });
});

// Lightbox para galerías: <ul data-lightbox="Título"> con <a href="imagen" data-caption="…">
(function () {
  const galleries = document.querySelectorAll("[data-lightbox]");
  if (!galleries.length || typeof HTMLDialogElement === "undefined") return;

  const icon = (d) =>
    `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
  const dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.setAttribute("aria-label", "Galería de fotos");
  dialog.innerHTML = `
    <div class="lightbox__bar">
      <span class="lightbox__title"></span>
      <span class="lightbox__count" aria-live="polite"></span>
      <button type="button" class="lightbox__close" aria-label="Cerrar galería">${icon("M18 6 6 18M6 6l12 12")}</button>
    </div>
    <div class="lightbox__stage">
      <button type="button" class="lightbox__prev" aria-label="Foto anterior">${icon("M15 18l-6-6 6-6")}</button>
      <img class="lightbox__img" alt="" />
      <button type="button" class="lightbox__next" aria-label="Foto siguiente">${icon("M9 18l6-6-6-6")}</button>
    </div>
    <p class="lightbox__caption"></p>`;
  document.body.appendChild(dialog);

  const img = dialog.querySelector(".lightbox__img");
  const title = dialog.querySelector(".lightbox__title");
  const count = dialog.querySelector(".lightbox__count");
  const caption = dialog.querySelector(".lightbox__caption");
  const stage = dialog.querySelector(".lightbox__stage");
  let items = [];
  let index = 0;
  let opener = null;

  const preload = (i) => {
    const it = items[(i + items.length) % items.length];
    if (it) new Image().src = it.src;
  };

  function show(i) {
    index = (i + items.length) % items.length;
    const it = items[index];
    img.classList.add("is-loading");
    img.onload = () => img.classList.remove("is-loading");
    img.src = it.src;
    img.alt = it.caption;
    caption.textContent = it.caption;
    count.textContent = `${String(index + 1).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`;
    preload(index + 1);
    preload(index - 1);
  }

  galleries.forEach((gallery) => {
    const links = [...gallery.querySelectorAll("a[href]")];
    links.forEach((link, i) => {
      link.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey) return; // permite abrir en pestaña nueva a propósito
        e.preventDefault();
        items = links.map((a) => ({ src: a.getAttribute("href"), caption: a.dataset.caption || "" }));
        title.textContent = gallery.dataset.lightbox || "";
        opener = link;
        show(i);
        dialog.showModal();
        dialog.querySelector(".lightbox__next").focus();
      });
    });
  });

  dialog.querySelector(".lightbox__prev").addEventListener("click", () => show(index - 1));
  dialog.querySelector(".lightbox__next").addEventListener("click", () => show(index + 1));
  dialog.querySelector(".lightbox__close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => opener && opener.focus());
  dialog.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") show(index + 1);
    if (e.key === "ArrowLeft") show(index - 1);
  });
  // Clic fuera de la foto cierra
  stage.addEventListener("click", (e) => {
    if (e.target === stage) dialog.close();
  });
  // Deslizar en móvil
  let startX = null;
  stage.addEventListener("touchstart", (e) => (startX = e.touches[0].clientX), { passive: true });
  stage.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 50) show(index + (dx < 0 ? 1 : -1));
    startX = null;
  });
})();

// Microinteracciones: líneas que se trazan, contenido que entra, cifras que cuentan,
// header compacto y regla de progreso. Todo es opcional: si falla, el sitio se ve igual.
(function () {
  const root = document.documentElement;
  const motion = root.classList.contains("js-motion");

  // Header compacto al hacer scroll
  const header = document.querySelector(".site-header");
  // Regla de progreso solo en páginas de proyecto
  let bar = null;
  if (header && document.querySelector(".case")) {
    bar = document.createElement("span");
    bar.className = "read-progress";
    bar.setAttribute("aria-hidden", "true");
    header.appendChild(bar);
  }
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      const compact = y > 24;
      header?.classList.toggle("is-compact", compact);
      root.classList.toggle("header-compact", compact);
      if (bar) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.setProperty("--progress", max > 0 ? Math.min(1, y / max).toFixed(4) : "0");
      }
      ticking = false;
    });
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (!motion) return;

  // Cifras que cuentan: "1,190 m²" → anima el número y respeta prefijo/sufijo
  const countUp = (el) => {
    const original = el.textContent;
    const m = original.match(/^(\D*)([\d.,]+)(.*)$/);
    if (!m) return;
    const target = parseFloat(m[2].replace(/,/g, ""));
    if (!isFinite(target) || target === 0) return;
    const decimals = (m[2].split(".")[1] || "").length;
    const fmt = new Intl.NumberFormat("es-MX", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    const duration = 1100;
    const start = performance.now();
    const step = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = m[1] + fmt.format(target * eased) + m[3];
      if (t < 1) requestAnimationFrame(step);
      else el.textContent = original;
    };
    requestAnimationFrame(step);
  };

  // Elementos que entran con un leve desplazamiento, escalonados dentro de su grupo
  const revealGroups = [".area-row", ".project-card", ".audiences__grid li", ".stats li", ".case__gallery li", ".featured"];
  revealGroups.forEach((sel) => {
    document.querySelectorAll(sel).forEach((el) => {
      el.setAttribute("data-reveal", "");
      const i = Array.prototype.indexOf.call(el.parentElement.children, el);
      el.style.transitionDelay = `${Math.min(i, 5) * 70}ms`;
    });
  });

  const counters = document.querySelectorAll(".stats__value, .featured__value, .project__value");
  const watched = document.querySelectorAll(".marker, .area-list, .portfolio-area__items, .area-row, [data-reveal]");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.1 },
  );
  watched.forEach((el) => io.observe(el));

  const counterIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        countUp(entry.target);
        counterIO.unobserve(entry.target);
      });
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => counterIO.observe(el));
})();
