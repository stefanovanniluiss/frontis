export function createDrinksPlayer(wrapper, config = {}, global = {}) {
  wrapper.classList.add("drinks-hero", "drinks-light");

  const beam = document.createElement("div");
  beam.className = "drinks-beam";
  wrapper.appendChild(beam);

  const wrap = document.createElement("div");
  wrap.className = "drinks-wrap";

  // LEFT PANE
  const leftPane = document.createElement("div");
  leftPane.className = "drinks-pane drinks-left";
  const leftInner = document.createElement("div");
  leftInner.className = "drinks-inner drinks-left-inner";

  const heroCopy = document.createElement("div");
  heroCopy.className = "drinks-hero-copy";
  if (config.highlight) {
    const heroHighlight = document.createElement("div");
    heroHighlight.className = "drinks-hero-highlight";
    heroHighlight.textContent = config.highlight;
    heroCopy.appendChild(heroHighlight);
  }
  const heroTitle = document.createElement("div");
  heroTitle.className = "drinks-hero-title";
  heroTitle.textContent = config.title || "Viasanto ahora tiene bar.";
  const heroSub = document.createElement("div");
  heroSub.className = "drinks-hero-sub";
  heroSub.textContent =
    config.subtitle || "Spritz, sours y gin preparados al momento.";
  heroCopy.append(heroTitle, heroSub);

  const heroPhoto = document.createElement("div");
  heroPhoto.className = "drinks-hero-photo";
  heroPhoto.style.backgroundImage = `url('${config.heroImage || "/img/viasanto/nightviasa.jpg"}')`;

  leftInner.append(heroCopy, heroPhoto);
  leftPane.appendChild(leftInner);

  // RIGHT PANE
  const rightPane = document.createElement("div");
  rightPane.className = "drinks-pane drinks-right";
  const rightInner = document.createElement("div");
  rightInner.className = "drinks-inner drinks-inner-right";

  const carousel = document.createElement("div");
  carousel.className = "drinks-carousel-light";
  const track = document.createElement("div");
  track.className = "drinks-track-light";

  const cardHeight = Number(config.cardHeight) || 300;
  const cardGap = 18;
  carousel.style.setProperty("--drinks-card-height", `${cardHeight}px`);
  carousel.style.setProperty("--drinks-card-gap", `${cardGap}px`);

  const items = Array.isArray(config.items) ? config.items : [];
  const list =
    items.length > 1 ? [...items, items[0]] : items.length === 1 ? items : [];

  if (!list.length) {
    const empty = document.createElement("div");
    empty.className = "drinks-empty";
    empty.textContent = "Agrega bebidas en el panel de administración.";
    track.appendChild(empty);
  } else {
    list.forEach((item) => {
      const card = document.createElement("div");
      card.className = "drinks-card-light";
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
      desc.className = "desc";
      desc.textContent = item.description || "";
      info.append(t, price, desc);
      card.append(img, badge, info);
      track.appendChild(card);
    });
  }

  carousel.appendChild(track);
  rightInner.appendChild(carousel);
  rightPane.appendChild(rightInner);

  wrap.append(leftPane, rightPane);
  wrapper.appendChild(wrap);

  // Endless loop distance matches the number of real items, clone only bridges the loop.
  const loopDistance =
    items.length > 1 ? items.length * (cardHeight + cardGap) : 0;
  const loopDuration = Math.max(14, (items.length || 1) * 5);
  track.style.setProperty("--drinks-loop-distance", `${loopDistance}px`);
  track.style.setProperty("--drinks-loop-duration", `${loopDuration}s`);
  if (items.length > 1) {
    track.classList.add("looping");
  } else {
    track.classList.add("single");
  }

  return { destroy() {} };
}
