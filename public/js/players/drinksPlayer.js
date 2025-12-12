export function createDrinksPlayer(wrapper, config = {}, global = {}) {
  wrapper.classList.add("drinks-hero");

  const left = document.createElement("div");
  left.className = "drinks-photo";
  left.style.backgroundImage = `linear-gradient(135deg, rgba(5,7,15,0.6), rgba(5,7,15,0.4)), url('${config.heroImage || "/media/bar-bg.jpg"}')`;

  const glass = document.createElement("div");
  glass.className = "drinks-glass";
  left.appendChild(glass);

  const carouselBox = document.createElement("div");
  carouselBox.className = "drinks-carousel";

  const topRow = document.createElement("div");
  topRow.className = "drinks-carousel-header";
  const title = document.createElement("span");
  title.textContent = config.title || "Ahora también brindamos en Viasanto";
  const hh = document.createElement("span");
  hh.className = "hh";
  hh.textContent = config.highlight || "Happy Hour 17:00 - 20:00";
  topRow.append(title, hh);

  const track = document.createElement("div");
  track.className = "drinks-track";

  const items = Array.isArray(config.items) ? config.items : [];
  if (!items.length) {
    const empty = document.createElement("div");
    empty.className = "drinks-empty";
    empty.textContent = "Agrega bebidas en el panel de administración.";
    track.appendChild(empty);
  } else {
    // duplicate for seamless scroll
    [...items, ...items].forEach((item) => {
      const card = document.createElement("div");
      card.className = "drinks-card";
      const img = document.createElement("div");
      img.className = "img";
      img.style.backgroundImage = `url('${item.image || ""}')`;
      const badge = document.createElement("div");
      badge.className = "badge";
      badge.textContent = item.badge || "Drink";
      const info = document.createElement("div");
      info.className = "info";
      const t = document.createElement("div");
      t.className = "title";
      t.textContent = item.title || "Bebida";
      const price = document.createElement("div");
      price.className = "price";
      price.textContent = item.price || "";
      const desc = document.createElement("div");
      desc.style.color = "#dfe4f5";
      desc.textContent = item.description || "";
      info.append(t, price, desc);
      card.append(img, badge, info);
      track.appendChild(card);
    });
  }

  carouselBox.append(topRow, track);
  left.appendChild(carouselBox);

  const right = document.createElement("div");
  right.className = "drinks-info";
  const pill = document.createElement("div");
  pill.className = "drinks-pill";
  pill.textContent = "Permiso de alcohol · Oficial";
  const h1 = document.createElement("h1");
  h1.textContent = config.title || "Ahora también brindamos en Viasanto";
  const p = document.createElement("p");
  p.textContent =
    config.subtitle ||
    "Coctelería elegante y mocktails premium. Happy Hour todas las tardes.";

  const list = document.createElement("div");
  list.className = "drinks-list";
  [
    "Spritz, Negroni, Sours, Gin & Tonics",
    "Mocktails (cero alcohol, mismo show)",
    "Combos: Cóctel + plato estrella",
    config.highlight || "Happy Hour 17:00 - 20:00",
  ].forEach((txt) => {
    const item = document.createElement("div");
    item.className = "drinks-list-item";
    item.textContent = txt;
    list.appendChild(item);
  });

  right.append(pill, h1, p, list);

  wrapper.append(left, right);

  return {
    destroy() {},
  };
}
