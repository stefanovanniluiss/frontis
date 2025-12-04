const TV_BUTTONS = Array.from(document.querySelectorAll(".tv-button"));
const modeSelect = document.getElementById("mode");
const brandInput = document.getElementById("brand");
const refreshInput = document.getElementById("refresh");
const backgroundInput = document.getElementById("background");
const accentInput = document.getElementById("accent");
const textColorInput = document.getElementById("textColor");
const transitionInput = document.getElementById("transitionMs");

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
const carouselItems = document.getElementById("carouselItems");
const addCarouselItemBtn = document.getElementById("addCarouselItem");

const slideDefaultDurationInput = document.getElementById("slideDefaultDuration");
const slidesList = document.getElementById("slidesList");
const addSlideBtn = document.getElementById("addSlide");

const customHtmlInput = document.getElementById("customHtml");

const saveButton = document.getElementById("saveConfig");
const reloadButton = document.getElementById("reloadConfig");
const statusText = document.getElementById("statusText");

const VIDEO_TEMPLATE = document.getElementById("video-item-template");
const MENU_SECTION_TEMPLATE = document.getElementById("menu-section-template");
const MENU_ITEM_TEMPLATE = document.getElementById("menu-item-template");
const CAROUSEL_TEMPLATE = document.getElementById("carousel-item-template");
const SLIDE_TEMPLATE = document.getElementById("slide-item-template");

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
  refreshSeconds: 90,
  transitionMs: 700,
  background: "#05070f",
  accent: "#ffb100",
  textColor: "#f6f8fb",
  video: { playlist: [] },
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
};

const state = {
  tv: 1,
  config: DEFAULT_CONFIG,
};

const setStatus = (text, tone = "info") => {
  statusText.textContent = text;
  statusText.dataset.tone = tone;
};

const mergeConfig = (incoming = {}) => ({
  ...DEFAULT_CONFIG,
  ...incoming,
  video: { ...DEFAULT_CONFIG.video, ...(incoming.video || {}) },
  menu: { ...DEFAULT_CONFIG.menu, ...(incoming.menu || {}) },
  carousel: { ...DEFAULT_CONFIG.carousel, ...(incoming.carousel || {}) },
  slides: { ...DEFAULT_CONFIG.slides, ...(incoming.slides || {}) },
  custom: { ...DEFAULT_CONFIG.custom, ...(incoming.custom || {}) },
});

function togglePanels(mode) {
  document.querySelectorAll("[data-mode-panel]").forEach((panel) => {
    panel.style.display =
      panel.getAttribute("data-mode-panel") === mode ? "block" : "none";
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
  });

  menuSections.appendChild(node);
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

  renderVideoList(config.video?.playlist || []);
  renderMenuSections(menu.sections || []);
  renderCarouselItems(carousel.items || []);
  renderSlides(config.slides?.slides || [], config.slides?.defaultDuration || 8);
  customHtmlInput.value = config.custom?.html || "";

  togglePanels(modeSelect.value);
}

const gatherConfig = () => ({
  mode: modeSelect.value,
  brand: brandInput.value.trim(),
  refreshSeconds: Number(refreshInput.value) || 90,
  transitionMs: Number(transitionInput.value) || 700,
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
    items: readCarouselItems(),
  },
  slides: {
    defaultDuration: Number(slideDefaultDurationInput.value) || 8,
    slides: readSlides(),
  },
  custom: { html: customHtmlInput.value },
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
  modeSelect.addEventListener("change", () => togglePanels(modeSelect.value));
  addVideoBtn.addEventListener("click", () => addVideoItem());
  addMenuSectionBtn.addEventListener("click", () => addMenuSection());
  addCarouselItemBtn.addEventListener("click", () => addCarouselItem());
  addSlideBtn.addEventListener("click", () => addSlide());

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
}

function init() {
  wireEvents();
  togglePanels(modeSelect.value);
  loadConfig(state.tv);
}

init();
