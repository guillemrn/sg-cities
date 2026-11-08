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
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const status = form.querySelector(".form-status");
      const submit = form.querySelector("button[type='submit']");
      const payload = Object.fromEntries(new FormData(form));
      if (payload.website) return;
      submit.disabled = true;
      status.textContent = "Enviando solicitud…";
      status.className = "form-status";
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
