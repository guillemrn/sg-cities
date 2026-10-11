# Design System: SG Cities

## Visual Identity & Theme
SG Cities proyecta una identidad corporativa técnica, sobria y orientada a la toma de decisiones territoriales y de infraestructura en México.

### Color Palette
- **Primary:** `#61b0bc` (Turquesa corporativo / precisión y viabilidad urbana)
- **Primary Dark:** `#4a8d97` (Hover y énfasis de lectura)
- **Secondary:** `#71a850` (Verde territorial / sostenibilidad y avance)
- **Secondary Dark:** `#5a8640`
- **Text:** `#132124` (Tinta oscura de alto contraste)
- **Text Muted:** `#4a5568`
- **Background:** `#fcfdfd` con fondos alternados en `#f8fafb`
- **Surface Cards:** `#ffffff` con bordes sutiles `border-black/5` y sombras suaves de elevación calculada.

### Typography
- **Display / Headings:** Outfit (`var(--font-outfit)`, sans-serif) - Jerarquía sólida, tracking equilibrado.
- **Body / Interface:** Poppins (`var(--font-poppins)`, sans-serif) - Alta legibilidad en descripciones técnicas y tablas.

### Components & Micro-interactions
- **Audience Triptych Dock:** Tarjetas de segmentación en el Hero para Inversores, Instituciones Educativas y Gobiernos.
- **Portfolio Matrix:** Selector de categorías dinámico (`Todos`, `Movilidad Urbana & Escolar`, `Obra Civil & Construcción`, `Factibilidad & Gobiernos`), etiquetas de soporte disponible (Fotos, Videos, PDF/Dictamen), píldoras de métricas de impacto y modal emergente de ficha técnica con alcance de entregables y conexión directa a WhatsApp.
- **Buttons:**
  - `.premium-button`: Fondo primario, bordes redondeados (`rounded-xl`), sombra de elevación e iconos animados al hover.
  - `.secondary-button`: Borde y texto primario/secundario, fondo transparente con sutil hover tintado.

### Accessibility & Responsiveness
- Contraste superior a 4.5:1 en textos principales.
- Transiciones fluidas en modales con bloqueo de scroll y fondos desenfocados.
- Adaptabilidad total en desktop, tablet y móviles con scroll horizontal suave en selectores de filtro.
