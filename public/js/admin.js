const TV_BUTTONS = Array.from(document.querySelectorAll(".tv-button"));
const modeSelect = document.getElementById("mode");
const brandInput = document.getElementById("brand");
const refreshInput = document.getElementById("refresh");
const backgroundInput = document.getElementById("background");
const accentInput = document.getElementById("accent");
const textColorInput = document.getElementById("textColor");
const transitionInput = document.getElementById("transitionMs");
const orientationSelect = document.getElementById("orientation");

const videoList = document.getElementById("videoList");
const addVideoBtn = document.getElementById("addVideo");

const menuTitleInput = document.getElementById("menuTitle");
const menuSubtitleInput = document.getElementById("menuSubtitle");
const menuHighlightInput = document.getElementById("menuHighlight");
const menuFooterInput = document.getElementById("menuFooter");
const menuSections = document.getElementById("menuSections");
const addMenuSectionBtn = document.getElementById("addMenuSection");

const carouselHeadlineInput = document.getElementById("carouselHeadline");
const carouselRibbonInput = document.getElementById("carouselRibbon");
const carouselSpeedInput = document.getElementById("carouselSpeed");
const carouselCardWidthInput = document.getElementById("carouselCardWidth");
const carouselRowsInput = document.getElementById("carouselRows");
const carouselRowOffsetInput = document.getElementById("carouselRowOffset");
const carouselItems = document.getElementById("carouselItems");
const addCarouselItemBtn = document.getElementById("addCarouselItem");

const slideDefaultDurationInput = document.getElementById("slideDefaultDuration");
const slidesList = document.getElementById("slidesList");
const addSlideBtn = document.getElementById("addSlide");

const customHtmlInput = document.getElementById("customHtml");

const sequenceDefaultDurationInput = document.getElementById("sequenceDefaultDuration");
const sequenceSteps = document.getElementById("sequenceSteps");
const addSequenceStepBtn = document.getElementById("addSequenceStep");

const saveButton = document.getElementById("saveConfig");
const reloadButton = document.getElementById("reloadConfig");
const statusText = document.getElementById("statusText");
const productsList = document.getElementById("productsList");
const refreshProductsBtn = document.getElementById("refreshProducts");
const targetMenuSectionSelect = document.getElementById("targetMenuSection");
const productSearchInput = document.getElementById("productSearch");
const openCatalogBtn = document.getElementById("openCatalog");
const closeCatalogBtn = document.getElementById("closeCatalog");
const catalogModal = document.getElementById("catalogModal");
const drinksTitleInput = document.getElementById("drinksTitle");
const drinksSubtitleInput = document.getElementById("drinksSubtitle");
const drinksHighlightInput = document.getElementById("drinksHighlight");
const drinksHeroImageInput = document.getElementById("drinksHeroImage");
const drinksCardHeightInput = document.getElementById("drinksCardHeight");
const drinksList = document.getElementById("drinksList");
const addDrinkBtn = document.getElementById("addDrink");

const VIDEO_TEMPLATE = document.getElementById("video-item-template");
const MENU_SECTION_TEMPLATE = document.getElementById("menu-section-template");
const MENU_ITEM_TEMPLATE = document.getElementById("menu-item-template");
const CAROUSEL_TEMPLATE = document.getElementById("carousel-item-template");
const SLIDE_TEMPLATE = document.getElementById("slide-item-template");
const SEQUENCE_TEMPLATE = document.getElementById("sequence-step-template");
const DRINK_TEMPLATE = document.getElementById("drink-item-template");

const SAMPLE_IMAGES = {
  amber:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAwJyBoZWlnaHQ9JzgwMCcgdmlld0JveD0nMCAwIDEyMDAgODAwJz4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyNmZmIxMDAnIG9mZnNldD0nMCUnLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nI2ZmNmIzZCcgb2Zmc2V0PScxMDAlJy8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0nMTIwMCcgaGVpZ2h0PSc4MDAnIGZpbGw9JyMwNTA3MGYnLz4KICA8cmVjdCB3aWR0aD0nMTIwMCcgaGVpZ2h0PSc4MDAnIGZpbGw9J3VybCgjZyknIG9wYWNpdHk9JzAuMjUnLz4KICA8dGV4dCB4PSc1MCUnIHk9JzUwJScgZm9udC1mYW1pbHk9J0JhcmxvdyxIZWx2ZXRpY2Esc2Fucy1zZXJpZicgZm9udC1zaXplPSc2NCcgZmlsbD0nI2Y2ZjhmYicgdGV4dC1hbmNob3I9J21pZGRsZScgZG9taW5hbnQtYmFzZWxpbmU9J21pZGRsZSc+Vmlhc2FudG88L3RleHQ+Cjwvc3ZnPg==",
  aqua: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAwJyBoZWlnaHQ9JzgwMCcgdmlld0JveD0nMCAwIDEyMDAgODAwJz4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyM0N2QzZmYnIG9mZnNldD0nMCUnLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nIzZlZjNjNScgb2Zmc2V0PScxMDAlJy8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0nMTIwMCcgaGVpZ2h0PSc4MDAnIGZpbGw9JyMwNTA3MGYnLz4KICA8cmVjdCB3aWR0aD0nMTIwMCcgaGVpZ2h0PSc4MDAnIGZpbGw9J3VybCgjZyknIG9wYWNpdHk9JzAuMjUnLz4KICA8dGV4dCB4PSc1MCUnIHk9JzUwJScgZm9udC1mYW1pbHk9J0JhcmxvdyxIZWx2ZXRpY2Esc2Fucy1zZXJpZicgZm9udC1zaXplPSc2NCcgZmlsbD0nI2Y2ZjhmYicgdGV4dC1hbmNob3I9J21pZGRsZScgZG9taW5hbnQtYmFzZWxpbmU9J21pZGRsZSc+Q2FmZSBlbiB2aXZvPC90ZXh0Pgo8L3N2Zz4=",
  berry:
    "data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMjAwJyBoZWlnaHQ9JzgwMCcgdmlld0JveD0nMCAwIDEyMDAgODAwJz4KICA8ZGVmcz4KICAgIDxsaW5lYXJHcmFkaWVudCBpZD0nZycgeDE9JzAlJyB5MT0nMCUnIHgyPScxMDAlJyB5Mj0nMTAwJSc+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9JyNmNTRmOWQnIG9mZnNldD0nMCUnLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0nIzdjNWJmZicgb2Zmc2V0PScxMDAlJy8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0nMTIwMCcgaGVpZ2h0PSc4MDAnIGZpbGw9JyMwNTA3MGYnLz4KICA8cmVjdCB3aWR0aD0nMTIwMCcgaGVpZ2h0PSc4MDAnIGZpbGw9J3VybCgjZyknIG9wYWNpdHk9JzAuMjUnLz4KICA8dGV4dCB4PSc1MCUnIHk9JzUwJScgZm9udC1mYW1pbHk9J0JhcmxvdyxIZWx2ZXRpY2Esc2Fucy1zZXJpZicgZm9udC1zaXplPSc2NCcgZmlsbD0nI2Y2ZjhmYicgdGV4dC1hbmNob3I9J21pZGRsZScgZG9taW5hbnQtYmFzZWxpbmU9J21pZGRsZSc+UGF0aXNzZXJpZTwvdGV4dD4KPC9zdmc+",
};

const DEFAULT_CONFIG = {
  brand: "Viasanto Caffè",
  mode: "carousel",
  orientation: "landscape",
  refreshSeconds: 90,
  transitionMs: 700,
  background: "#05070f",
  accent: "#ffb100",
  textColor: "#f6f8fb",
  video: {
    playlist: [
      {
        src: "/media/coffee-promo.mp4",
        type: "video/mp4",
        mute: true,
        loop: false,
      },
    ],
  },
  menu: {
    title: "Cafetería de Autor",
    subtitle: "Café de especialidad y pastelería fresca",
    highlight: "Abierto 7:30 — 20:00",
    footerNote: "Precios en CLP. Pregunta por opciones sin lactosa.",
    sections: [
      {
        name: "Cafés Calientes",
        items: [
          {
            name: "Capuccino Doble",
            price: "$2.900",
            description: "Espresso doble + leche vaporizada",
          },
          {
            name: "Flat White",
            price: "$3.200",
            description: "Suave, balanceado, servido en vaso caliente",
          },
        ],
      },
      {
        name: "Cafés Fríos",
        items: [
          {
            name: "Cold Brew Limón",
            price: "$3.200",
            description: "48h de macerado en frío, twist cítrico",
          },
          {
            name: "Tonic Espresso",
            price: "$3.400",
            description: "Tónica amarga, espresso doble, piel de pomelo",
          },
        ],
      },
    ],
  },
  carousel: {
    headline: "Pasa y pruébalo",
    ribbon: "Café de especialidad",
    speedSeconds: 32,
    cardWidth: 320,
    rows: 1,
    rowOffsetPercent: 50,
    items: [
      {
        title: "Latte con Avena",
        price: "$3.400",
        image: SAMPLE_IMAGES.amber,
        tag: "Favorito",
        meta: "Espresso + leche de avena cremosa",
      },
      {
        title: "Sandwich Pastrami",
        price: "$5.900",
        image: SAMPLE_IMAGES.berry,
        tag: "Nuevo",
        meta: "Pan masa madre, pickles caseros, mostaza Dijon",
      },
      {
        title: "Affogato",
        price: "$3.800",
        image: SAMPLE_IMAGES.aqua,
        tag: "Dulce",
        meta: "Gelato de vainilla bañado en espresso doble",
      },
    ],
  },
  slides: {
    defaultDuration: 8,
    slides: [
      { type: "image", src: SAMPLE_IMAGES.amber, duration: 9 },
      {
        type: "html",
        duration: 8,
        html: `<div style="display:grid;place-items:center;text-align:center;padding:32px;">
          <div style="letter-spacing:0.16em; text-transform:uppercase; color:#47d3ff; margin-bottom:10px;">Vitrina viva</div>
          <div style="font-size:28px; font-weight:700; margin-bottom:6px;">Historias que pasan al ritmo de la vereda</div>
          <div style="color:#b8c0cf; font-size:18px; line-height:1.5;">Mira nuestras preparaciones, ofertas y recomendaciones. Todo se actualiza en línea desde el panel de administración.</div>
        </div>`,
      },
    ],
  },
  custom: {
    html: "<div style='display:grid;place-items:center;height:100%;font-size:28px;color:#f6f8fb;'>Personaliza este bloque en el panel.</div>",
  },
  drinks: {
    title: "Ahora también brindamos en Viasanto",
    subtitle: "Spritz, sours, gin & tonics, y mocktails premium.",
    heroImage: "/media/bar-bg.jpg",
    highlight: "Happy Hour 17:00 - 20:00",
    cardHeight: 300,
    items: [
      {
        image: "/media/drink1.jpg",
        badge: "Spritz",
        title: "Spritz Maracuyá",
        price: "$6.900",
        description: "Prosecco, maracuyá fresco, bitter de naranja.",
      },
      {
        image: "/media/drink2.jpg",
        badge: "Gin & Tónica",
        title: "Botánico",
        price: "$6.800",
        description: "Gin cítrico, tónica premium, enebro, pepino.",
      },
      {
        image: "/media/drink3.jpg",
        badge: "Sour",
        title: "Sour Maqui",
        price: "$6.800",
        description: "Pisco, limón sutil, almíbar de maqui.",
      },
      {
        image: "/media/drink4.jpg",
        badge: "Mocktail",
        title: "Cítrico sin alcohol",
        price: "$5.200",
        description: "Naranja, pomelo, tónica especiada.",
      },
    ],
  },
  sequence: {
    defaultDuration: 20,
    steps: [
      { mode: "video", durationSeconds: 18 },
      { mode: "carousel", durationSeconds: 18 },
      { mode: "menu", durationSeconds: 18 },
      { mode: "slides", durationSeconds: 16 },
    ],
  },
};

const state = {
  tv: 1,
  config: DEFAULT_CONFIG,
  products: [],
  productFilter: "",
};

const setStatus = (text, tone = "info") => {
  statusText.textContent = text;
  statusText.dataset.tone = tone;
};

const flashButton = (btn) => {
  if (!btn) return;
  btn.classList.remove("clicked");
  // force reflow
  void btn.offsetWidth;
  btn.classList.add("clicked");
  setTimeout(() => btn.classList.remove("clicked"), 220);
};

const mergeConfig = (incoming = {}) => ({
  ...DEFAULT_CONFIG,
  ...incoming,
  video: { ...DEFAULT_CONFIG.video, ...(incoming.video || {}) },
  menu: { ...DEFAULT_CONFIG.menu, ...(incoming.menu || {}) },
  carousel: { ...DEFAULT_CONFIG.carousel, ...(incoming.carousel || {}) },
  slides: { ...DEFAULT_CONFIG.slides, ...(incoming.slides || {}) },
  custom: { ...DEFAULT_CONFIG.custom, ...(incoming.custom || {}) },
  drinks: { ...DEFAULT_CONFIG.drinks, ...(incoming.drinks || {}) },
  sequence: { ...DEFAULT_CONFIG.sequence, ...(incoming.sequence || {}) },
});

function togglePanels(mode) {
  const showAll = mode === "sequence";
  document.querySelectorAll("[data-mode-panel]").forEach((panel) => {
    const panelMode = panel.getAttribute("data-mode-panel");
    panel.style.display = showAll || panelMode === mode ? "block" : "none";
  });
}

function renderVideoList(playlist = []) {
  videoList.innerHTML = "";
  if (!playlist.length) playlist = [{}];
  playlist.forEach((item) => addVideoItem(item));
}

function addVideoItem(item = {}) {
  const node = VIDEO_TEMPLATE.content.firstElementChild.cloneNode(true);
  node.querySelector('input[name="src"]').value = item.src || "";
  node.querySelector('input[name="type"]').value = item.type || "video/mp4";
  node.querySelector('input[name="mute"]').checked = item.mute !== false;
  node.querySelector('input[name="loop"]').checked = item.loop !== false;
  node.querySelector(".remove").addEventListener("click", () => {
    node.remove();
  });
  videoList.appendChild(node);
}

function renderMenuSections(sections = []) {
  menuSections.innerHTML = "";
  if (!sections.length) sections = [{ items: [] }];
  sections.forEach((section) => addMenuSection(section));
  refreshMenuSectionOptions();
}

function addMenuSection(section = {}) {
  const node = MENU_SECTION_TEMPLATE.content.firstElementChild.cloneNode(true);
  node.querySelector('input[name="name"]').value = section.name || "";
  const itemsContainer = node.querySelector(".items");
  const addItemBtn = node.querySelector(".add-item");

  const renderItems = (items = []) => {
    itemsContainer.innerHTML = "";
    if (!items.length) items = [{}];
    items.forEach((item) => {
      const itemNode = MENU_ITEM_TEMPLATE.content.firstElementChild.cloneNode(true);
      itemNode.querySelector('input[name="name"]').value = item.name || "";
      itemNode.querySelector('input[name="price"]').value = item.price || "";
      itemNode.querySelector('input[name="description"]').value =
        item.description || "";
      itemNode.querySelector(".remove").addEventListener("click", () => {
        itemNode.remove();
      });
      itemsContainer.appendChild(itemNode);
    });
  };

  renderItems(section.items || []);

  addItemBtn.addEventListener("click", () => renderItems([...readMenuItems(itemsContainer), {}]));

  node.querySelector(".remove").addEventListener("click", () => {
    node.remove();
    refreshMenuSectionOptions();
  });

  menuSections.appendChild(node);
  refreshMenuSectionOptions();
}

function renderCarouselItems(items = []) {
  carouselItems.innerHTML = "";
  if (!items.length) items = [{}];
  items.forEach((item) => addCarouselItem(item));
}

function addCarouselItem(item = {}) {
  const node = CAROUSEL_TEMPLATE.content.firstElementChild.cloneNode(true);
  node.querySelector('input[name="title"]').value = item.title || "";
  node.querySelector('input[name="price"]').value = item.price || "";
  node.querySelector('input[name="tag"]').value = item.tag || "";
  node.querySelector('input[name="meta"]').value = item.meta || "";
  node.querySelector('input[name="image"]').value = item.image || "";
  node.querySelector(".remove").addEventListener("click", () => node.remove());
  carouselItems.appendChild(node);
}

function renderSlides(slides = [], defaultDuration = 8) {
  slidesList.innerHTML = "";
  if (!slides.length) slides = [{}];
  slideDefaultDurationInput.value = defaultDuration;
  slides.forEach((slide) => addSlide(slide));
}

function renderDrinks(items = []) {
  drinksList.innerHTML = "";
  if (!items.length) items = [{}];
  items.forEach((drink) => addDrink(drink));
}

function renderSequence(steps = [], defaultDuration = 20) {
  sequenceSteps.innerHTML = "";
  sequenceDefaultDurationInput.value = defaultDuration;
  if (!steps.length) steps = [{}];
  steps.forEach((step) => addSequenceStep(step));
}

function addSlide(slide = {}) {
  const node = SLIDE_TEMPLATE.content.firstElementChild.cloneNode(true);
  const typeSelect = node.querySelector('select[name="type"]');
  const durationInput = node.querySelector('input[name="duration"]');
  const srcField = node.querySelector(".slide-src");
  const htmlField = node.querySelector(".slide-html");
  const srcInput = node.querySelector('input[name="src"]');
  const htmlInput = node.querySelector('textarea[name="html"]');

  typeSelect.value = slide.type || "image";
  durationInput.value = slide.duration || "";
  srcInput.value = slide.src || "";
  htmlInput.value = slide.html || "";

  const updateVisibility = () => {
    const isHtml = typeSelect.value === "html";
    srcField.style.display = isHtml ? "none" : "block";
    htmlField.style.display = isHtml ? "block" : "none";
  };

  updateVisibility();
  typeSelect.addEventListener("change", updateVisibility);

  node.querySelector(".remove").addEventListener("click", () => node.remove());
  slidesList.appendChild(node);
}

function addDrink(drink = {}) {
  const node = DRINK_TEMPLATE.content.firstElementChild.cloneNode(true);
  node.querySelector('input[name="image"]').value = drink.image || "";
  node.querySelector('input[name="badge"]').value = drink.badge || "";
  node.querySelector('input[name="price"]').value = drink.price || "";
  node.querySelector('input[name="title"]').value = drink.title || "";
  node.querySelector('input[name="description"]').value = drink.description || "";
  node.querySelector(".remove").addEventListener("click", () => node.remove());
  drinksList.appendChild(node);
}

function addSequenceStep(step = {}) {
  const node = SEQUENCE_TEMPLATE.content.firstElementChild.cloneNode(true);
  node.querySelector('select[name="mode"]').value = step.mode || "carousel";
  node.querySelector('input[name="durationSeconds"]').value =
    step.durationSeconds || "";
  node.querySelector(".remove").addEventListener("click", () => node.remove());
  sequenceSteps.appendChild(node);
}

function refreshMenuSectionOptions() {
  targetMenuSectionSelect.innerHTML = "";
  const sections = Array.from(menuSections.querySelectorAll(".menu-section-item"));
  if (!sections.length) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "Primera sección";
    targetMenuSectionSelect.appendChild(opt);
    return;
  }
  sections.forEach((section, idx) => {
    const name = section.querySelector('input[name="name"]').value || `Sección ${idx + 1}`;
    const opt = document.createElement("option");
    opt.value = String(idx);
    opt.textContent = name;
    targetMenuSectionSelect.appendChild(opt);
  });
}

function filteredProducts() {
  const term = state.productFilter.trim().toLowerCase();
  if (!term) return state.products;
  return state.products.filter((p) =>
    (p.name || "").toLowerCase().includes(term)
  );
}

function renderProducts() {
  const products = filteredProducts();
  productsList.innerHTML = "";
  if (!products.length) {
    productsList.innerHTML =
      "<div class='menu-footer'>No hay productos cargados.</div>";
    return;
  }
  products.forEach((p) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const thumb = document.createElement("div");
    thumb.className = "thumb";
    if (p.image_url) {
      const img = document.createElement("img");
      img.src = p.image_url;
      img.alt = p.name || "";
      thumb.appendChild(img);
    } else {
      thumb.textContent = "Sin imagen";
    }

    const name = document.createElement("div");
    name.className = "name";
    name.textContent = p.name || "Producto";

    const desc = document.createElement("div");
    desc.className = "desc";
    desc.textContent = p.description || "";

    const priceRow = document.createElement("div");
    priceRow.className = "price-row";
    const priceLabel = document.createElement("div");
    priceLabel.className = "price";
    priceLabel.textContent = "Precio:";
    const priceInput = document.createElement("input");
    priceInput.type = "number";
    priceInput.min = "0";
    priceInput.step = "100";
    priceInput.value = p.price_clp ?? "";
    const savePrice = document.createElement("button");
    savePrice.className = "ghost small";
    savePrice.textContent = "Guardar precio";
    savePrice.addEventListener("click", async () => {
      const newPrice = Number(priceInput.value);
      if (Number.isNaN(newPrice)) {
        setStatus("Precio inválido.", "warn");
        return;
      }
      const ok = await updateProductPrice(p.id, newPrice);
      if (ok) {
        setStatus(`Precio actualizado: $${newPrice}`);
        flashButton(savePrice);
      }
    });
    priceRow.append(priceLabel, priceInput, savePrice);

    const actions = document.createElement("div");
    actions.className = "actions";

    const addToCarousel = document.createElement("button");
    addToCarousel.className = "ghost small";
    addToCarousel.textContent = "Carousel";
    addToCarousel.addEventListener("click", () => {
      addCarouselItem({
        title: p.name,
        price: p.price_clp ? `$${p.price_clp}` : "",
        meta: p.description,
        image: p.image_url,
      });
      setStatus(`Agregado a carousel: ${p.name || "Producto"}.`);
      flashButton(addToCarousel);
    });

    const addToSlides = document.createElement("button");
    addToSlides.className = "ghost small";
    addToSlides.textContent = "Slide";
    addToSlides.addEventListener("click", () => {
      addSlide({
        type: "image",
        src: p.image_url,
        duration: 8,
      });
      setStatus(`Agregado a slides: ${p.name || "Producto"}.`);
      flashButton(addToSlides);
    });

    const addToDrinks = document.createElement("button");
    addToDrinks.className = "ghost small";
    addToDrinks.textContent = "Drinks";
    addToDrinks.addEventListener("click", () => {
      addDrink({
        image: p.image_url,
        title: p.name,
        price: p.price_clp ? `$${p.price_clp}` : "",
        description: p.description,
        badge: "Drink",
      });
      setStatus(`Agregado a drinks: ${p.name || "Producto"}.`);
      flashButton(addToDrinks);
    });

    const addToMenu = document.createElement("button");
    addToMenu.className = "ghost small";
    addToMenu.textContent = "Menú";
    addToMenu.addEventListener("click", () => {
      let sections = Array.from(menuSections.querySelectorAll(".menu-section-item"));
      if (!sections.length) {
        addMenuSection({ items: [] });
        sections = Array.from(menuSections.querySelectorAll(".menu-section-item"));
      }
      const targetIdx = targetMenuSectionSelect.value
        ? Number(targetMenuSectionSelect.value)
        : 0;
      const section = sections[targetIdx] || sections[0];
      const itemsContainer = section.querySelector(".items");
      const itemNode = MENU_ITEM_TEMPLATE.content.firstElementChild.cloneNode(true);
      itemNode.querySelector('input[name="name"]').value = p.name || "";
      itemNode.querySelector('input[name="price"]').value = p.price_clp ? `$${p.price_clp}` : "";
      itemNode.querySelector('input[name="description"]').value = p.description || "";
      itemNode.querySelector(".remove").addEventListener("click", () => itemNode.remove());
      itemsContainer.appendChild(itemNode);
      setStatus(`Agregado al menú: ${p.name || "Producto"}.`);
      flashButton(addToMenu);
    });

    actions.append(addToCarousel, addToSlides, addToDrinks, addToMenu);

    card.append(thumb, name, desc, priceRow, actions);
    productsList.appendChild(card);
  });
}

async function updateProductPrice(id, price) {
  if (!id) return false;
  try {
    const res = await fetch("/api/products.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, price_clp: price }),
    });
    if (!res.ok) throw new Error("No se pudo actualizar el precio");
    const data = await res.json();
    if (data.error) throw new Error(data.error);
    state.products = state.products.map((prod) =>
      prod.id === id ? { ...prod, price_clp: price } : prod
    );
    renderProducts();
    return true;
  } catch (error) {
    console.error(error);
    setStatus("No se pudo actualizar el precio en la base de datos.", "error");
    return false;
  }
}

async function fetchProducts() {
  setStatus("Cargando productos...");
  try {
    const res = await fetch("/api/products.php?ts=" + Date.now());
    if (!res.ok) throw new Error("No se pudo cargar productos");
    const data = await res.json();
    state.products = data.items || [];
    renderProducts();
    setStatus("Productos listos.");
  } catch (error) {
    console.error(error);
    state.products = [];
    renderProducts();
    setStatus("No se pudieron cargar productos.", "warn");
  }
}

const readVideoList = () =>
  Array.from(videoList.querySelectorAll(".video-item"))
    .map((node) => ({
      src: node.querySelector('input[name="src"]').value.trim(),
      type: node.querySelector('input[name="type"]').value.trim() || "video/mp4",
      mute: node.querySelector('input[name="mute"]').checked,
      loop: node.querySelector('input[name="loop"]').checked,
    }))
    .filter((item) => item.src);

const readMenuItems = (container) =>
  Array.from(container.querySelectorAll(".menu-item"))
    .map((node) => ({
      name: node.querySelector('input[name="name"]').value.trim(),
      price: node.querySelector('input[name="price"]').value.trim(),
      description: node.querySelector('input[name="description"]').value.trim(),
    }))
    .filter((item) => item.name || item.price || item.description);

const readMenuSections = () =>
  Array.from(menuSections.querySelectorAll(".menu-section-item"))
    .map((node) => ({
      name: node.querySelector('input[name="name"]').value.trim(),
      items: readMenuItems(node.querySelector(".items")),
    }))
    .filter((section) => section.name || section.items.length);

const readCarouselItems = () =>
  Array.from(carouselItems.querySelectorAll(".carousel-item"))
    .map((node) => ({
      title: node.querySelector('input[name="title"]').value.trim(),
      price: node.querySelector('input[name="price"]').value.trim(),
      tag: node.querySelector('input[name="tag"]').value.trim(),
      meta: node.querySelector('input[name="meta"]').value.trim(),
      image: node.querySelector('input[name="image"]').value.trim(),
    }))
    .filter((item) => item.title || item.price || item.image);

const readSlides = () =>
  Array.from(slidesList.querySelectorAll(".slide-item"))
    .map((node) => ({
      type: node.querySelector('select[name="type"]').value,
      duration: Number(node.querySelector('input[name="duration"]').value) || undefined,
      src: node.querySelector('input[name="src"]').value.trim(),
      html: node.querySelector('textarea[name="html"]').value,
    }))
    .filter((slide) => {
      if (slide.type === "html") return slide.html?.trim();
      return slide.src;
    });

const readSequenceSteps = () =>
  Array.from(sequenceSteps.querySelectorAll(".sequence-step"))
    .map((node) => ({
      mode: node.querySelector('select[name="mode"]').value,
      durationSeconds:
        Number(node.querySelector('input[name="durationSeconds"]').value) ||
        undefined,
    }))
    .filter((step) => step.mode);

function applyConfig(config) {
  modeSelect.value = config.mode || "carousel";
  brandInput.value = config.brand || "";
  refreshInput.value = config.refreshSeconds || 90;
  backgroundInput.value = config.background || "";
  accentInput.value = config.accent || "";
  textColorInput.value = config.textColor || "";
  transitionInput.value = config.transitionMs || 700;

  const menu = config.menu || {};
  menuTitleInput.value = menu.title || "";
  menuSubtitleInput.value = menu.subtitle || "";
  menuHighlightInput.value = menu.highlight || "";
  menuFooterInput.value = menu.footerNote || "";

  const carousel = config.carousel || {};
  carouselHeadlineInput.value = carousel.headline || "";
  carouselRibbonInput.value = carousel.ribbon || "";
  carouselSpeedInput.value = carousel.speedSeconds || 32;
  carouselCardWidthInput.value = carousel.cardWidth || 320;
  carouselRowsInput.value = carousel.rows === 2 ? "2" : "1";
  carouselRowOffsetInput.value = carousel.rowOffsetPercent ?? 50;

  renderVideoList(config.video?.playlist || []);
  renderMenuSections(menu.sections || []);
  renderCarouselItems(carousel.items || []);
  renderSlides(config.slides?.slides || [], config.slides?.defaultDuration || 8);
  customHtmlInput.value = config.custom?.html || "";
  drinksTitleInput.value = config.drinks?.title || "";
  drinksSubtitleInput.value = config.drinks?.subtitle || "";
  drinksHighlightInput.value = config.drinks?.highlight || "";
  drinksHeroImageInput.value = config.drinks?.heroImage || "";
  drinksCardHeightInput.value = config.drinks?.cardHeight || 300;
  renderDrinks(config.drinks?.items || []);
  renderSequence(config.sequence?.steps || [], config.sequence?.defaultDuration || 20);
  orientationSelect.value = config.orientation || "landscape";

  togglePanels(modeSelect.value);
}

const gatherConfig = () => ({
  mode: modeSelect.value,
  brand: brandInput.value.trim(),
  refreshSeconds: Number(refreshInput.value) || 90,
  transitionMs: Number(transitionInput.value) || 700,
  orientation: orientationSelect.value || "landscape",
  background: backgroundInput.value.trim() || DEFAULT_CONFIG.background,
  accent: accentInput.value.trim() || DEFAULT_CONFIG.accent,
  textColor: textColorInput.value.trim() || DEFAULT_CONFIG.textColor,
  video: { playlist: readVideoList() },
  menu: {
    title: menuTitleInput.value.trim(),
    subtitle: menuSubtitleInput.value.trim(),
    highlight: menuHighlightInput.value.trim(),
    footerNote: menuFooterInput.value.trim(),
    sections: readMenuSections(),
  },
  carousel: {
    headline: carouselHeadlineInput.value.trim(),
    ribbon: carouselRibbonInput.value.trim(),
    speedSeconds: Number(carouselSpeedInput.value) || 32,
    cardWidth: Number(carouselCardWidthInput.value) || 320,
    rows: Number(carouselRowsInput.value) === 2 ? 2 : 1,
    rowOffsetPercent: Number(carouselRowOffsetInput.value) || 50,
    items: readCarouselItems(),
  },
  slides: {
    defaultDuration: Number(slideDefaultDurationInput.value) || 8,
    slides: readSlides(),
  },
  custom: { html: customHtmlInput.value },
  drinks: {
    title: drinksTitleInput.value.trim(),
    subtitle: drinksSubtitleInput.value.trim(),
    highlight: drinksHighlightInput.value.trim(),
    heroImage: drinksHeroImageInput.value.trim() || "/media/bar-bg.jpg",
    cardHeight: Number(drinksCardHeightInput.value) || 300,
    items: Array.from(drinksList.querySelectorAll(".drink-item")).map((node) => ({
      image: node.querySelector('input[name="image"]').value.trim(),
      badge: node.querySelector('input[name="badge"]').value.trim(),
      price: node.querySelector('input[name="price"]').value.trim(),
      title: node.querySelector('input[name="title"]').value.trim(),
      description: node.querySelector('input[name="description"]').value.trim(),
    })).filter((d) => d.image || d.title || d.price || d.description),
  },
  sequence: {
    defaultDuration: Number(sequenceDefaultDurationInput.value) || 20,
    steps: readSequenceSteps(),
  },
});

async function loadConfig(tv) {
  setStatus(`Cargando config para TV ${tv}...`);
  try {
    const res = await fetch(`/api/tv/${tv}/config.json?ts=${Date.now()}`);
    if (!res.ok) {
      throw new Error("No existe archivo, se usará plantilla base.");
    }
    const data = await res.json();
    state.config = mergeConfig(data);
    setStatus(`Config de TV ${tv} cargada.`);
  } catch (error) {
    console.warn(error);
    state.config = DEFAULT_CONFIG;
    setStatus(
      `No se encontró config para TV ${tv}. Se usará plantilla base.`,
      "warn"
    );
  }
  applyConfig(state.config);
}

async function saveConfig() {
  const payload = gatherConfig();
  setStatus("Guardando configuración...");
  try {
    const res = await fetch(`/api/config.php?tv=${state.tv}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload, null, 2),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.error) {
      throw new Error(data.error || "No se pudo guardar.");
    }
    setStatus(`Configuración de TV ${state.tv} guardada.`);
  } catch (error) {
    console.error(error);
    setStatus("Error al guardar. Revisa permisos del servidor.", "error");
  }
}

function wireEvents() {
  document.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (btn) flashButton(btn);
  });
  modeSelect.addEventListener("change", () => togglePanels(modeSelect.value));
  addVideoBtn.addEventListener("click", () => addVideoItem());
  addMenuSectionBtn.addEventListener("click", () => addMenuSection());
  addCarouselItemBtn.addEventListener("click", () => addCarouselItem());
  addSlideBtn.addEventListener("click", () => addSlide());
  addSequenceStepBtn.addEventListener("click", () => addSequenceStep());
  refreshProductsBtn.addEventListener("click", fetchProducts);
  addDrinkBtn.addEventListener("click", () => addDrink());
  productSearchInput?.addEventListener("input", (e) => {
    state.productFilter = e.target.value;
    renderProducts();
  });

  TV_BUTTONS.forEach((btn) => {
    btn.addEventListener("click", () => {
      TV_BUTTONS.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      state.tv = Number(btn.dataset.tv);
      loadConfig(state.tv);
    });
  });

  saveButton.addEventListener("click", saveConfig);
  reloadButton.addEventListener("click", () => loadConfig(state.tv));
  openCatalogBtn.addEventListener("click", () => {
    catalogModal.classList.add("show");
    state.productFilter = "";
    if (productSearchInput) productSearchInput.value = "";
    renderProducts();
  });
  closeCatalogBtn.addEventListener("click", () =>
    catalogModal.classList.remove("show")
  );
  catalogModal
    .querySelector(".modal-backdrop")
    .addEventListener("click", () =>
      catalogModal.classList.remove("show")
    );
}

function init() {
  wireEvents();
  togglePanels(modeSelect.value);
  loadConfig(state.tv);
  fetchProducts();
}

init();
