export function createMenuPlayer(wrapper, config = {}) {
  wrapper.classList.add("menu-board");

  const header = document.createElement("div");
  header.className = "menu-header";

  const titleBlock = document.createElement("div");
  const titleEl = document.createElement("div");
  titleEl.className = "menu-title";
  titleEl.textContent = config.title || "Menú Viasanto";
  const subtitleEl = document.createElement("div");
  subtitleEl.className = "menu-subtitle";
  subtitleEl.textContent =
    config.subtitle || "Café de especialidad y pastelería fresca";

  titleBlock.appendChild(titleEl);
  titleBlock.appendChild(subtitleEl);

  const highlight = document.createElement("div");
  highlight.className = "menu-highlight";
  const label = document.createElement("div");
  label.className = "label";
  label.textContent = config.highlight ? "Hoy" : "Abierto";
  const value = document.createElement("div");
  value.className = "value";
  value.textContent = config.highlight || "Abierto hoy";
  highlight.append(label, value);

  header.append(titleBlock, highlight);

  const grid = document.createElement("div");
  grid.className = "menu-grid";

  const sections = Array.isArray(config.sections) ? config.sections : [];

  if (!sections.length) {
    const empty = document.createElement("div");
    empty.className = "menu-footer";
    empty.textContent = "Agrega secciones de menú en el panel de administración.";
    grid.appendChild(empty);
  } else {
    sections.forEach((section) => {
      const sectionEl = document.createElement("div");
      sectionEl.className = "menu-section";
      const heading = document.createElement("h3");
      heading.textContent = section.name || "Sección";
      sectionEl.appendChild(heading);

      const itemsEl = document.createElement("div");
      itemsEl.className = "menu-items";

      (section.items || []).forEach((item) => {
        const itemEl = document.createElement("div");
        itemEl.className = "menu-item";
        const info = document.createElement("div");
        const name = document.createElement("div");
        name.className = "name";
        name.textContent = item.name || "Producto";
        const desc = document.createElement("div");
        desc.className = "desc";
        desc.textContent = item.description || "";
        info.append(name, desc);

        const price = document.createElement("div");
        price.className = "price";
        price.textContent = item.price || "";
        itemEl.append(info, price);
        itemsEl.appendChild(itemEl);
      });

      sectionEl.appendChild(itemsEl);
      grid.appendChild(sectionEl);
    });
  }

  const footer = document.createElement("div");
  footer.className = "menu-footer";
  footer.textContent =
    config.footerNote || "Precios en CLP. Pregunta por opciones sin lactosa.";

  wrapper.append(header, grid, footer);

  return {
    destroy() {},
  };
}
