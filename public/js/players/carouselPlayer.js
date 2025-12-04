export function createCarouselPlayer(wrapper, config = {}) {
  wrapper.classList.add("carousel");

  const header = document.createElement("div");
  header.className = "carousel-header";
  const title = document.createElement("div");
  title.className = "carousel-title";
  title.textContent = config.headline || "Promos y favoritos";
  const ribbon = document.createElement("div");
  ribbon.className = "pill";
  ribbon.textContent = config.ribbon || "Hecho en el barrio";
  header.append(title, ribbon);

  const track = document.createElement("div");
  track.className = "carousel-track";

  const items = Array.isArray(config.items) ? config.items : [];

  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "menu-footer";
    empty.textContent = "Agrega productos para la vitrina en el panel de administración.";
    wrapper.append(header, empty);
    return {};
  }

  const duration =
    Math.max(12, Number(config.speedSeconds) || 32) + Math.max(0, items.length - 4);
  track.style.animationDuration = `${duration}s`;

  const renderCard = (item) => {
    const card = document.createElement("div");
    card.className = "carousel-card";
    const visual = document.createElement("div");
    visual.className = "visual";
    visual.style.backgroundImage = `url('${item.image || ""}')`;
    if (item.tag) {
      const tag = document.createElement("div");
      tag.className = "overlay-tag";
      tag.textContent = item.tag;
      visual.appendChild(tag);
    }
    const copy = document.createElement("div");
    copy.className = "copy";
    const name = document.createElement("div");
    name.className = "name";
    name.textContent = item.title || "Producto";
    const price = document.createElement("div");
    price.className = "price";
    price.textContent = item.price || "";
    const meta = document.createElement("div");
    meta.className = "meta";
    meta.textContent = item.meta || "";
    copy.append(name, price, meta);
    card.append(visual, copy);
    return card;
  };

  // Duplicate items for a seamless marquee
  [...items, ...items].forEach((item) => track.appendChild(renderCard(item)));

  wrapper.append(header, track);

  return {
    destroy() {},
  };
}
