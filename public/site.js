document.addEventListener("DOMContentLoaded", function () {
  // Menú móvil
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector(".site-nav");
  if (hamburger && nav) {
    const close = () => {
      hamburger.classList.remove("is-active");
      nav.classList.remove("is-active");
      hamburger.setAttribute("aria-expanded", "false");
    };
    hamburger.addEventListener("click", () => {
      const isOpen = hamburger.classList.toggle("is-active");
      nav.classList.toggle("is-active", isOpen);
      hamburger.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", close));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.classList.contains("is-active")) close();
    });
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
        if (!response.ok) throw new Error("contact request failed");
        const go = () => (window.location.href = form.dataset.successUrl || "/gracias");
        if (sheet) {
          sheet.classList.add("is-sent");
          setTimeout(go, matchMedia("(prefers-reduced-motion: reduce)").matches ? 300 : 1100);
        } else go();
      } catch {
        submit.disabled = false;
        submit.classList.remove("is-loading");
        submitText.textContent = defaultText;
        status.textContent = "No pudimos enviar la solicitud. Intenta de nuevo o escríbenos por WhatsApp.";
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
