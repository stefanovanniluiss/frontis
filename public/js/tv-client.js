import { createVideoPlayer } from "./players/videoPlayer.js";
import { createMenuPlayer } from "./players/menuPlayer.js";
import { createCarouselPlayer } from "./players/carouselPlayer.js";
import { createSlidesPlayer } from "./players/slidesPlayer.js";
import { createCustomPlayer } from "./players/customPlayer.js";

const tvId = window.TV_ID || 1;
const root = document.getElementById("tv-root");
const modeHost = document.createElement("div");
modeHost.id = "mode-host";
root.appendChild(modeHost);

const brandBadge = document.createElement("div");
brandBadge.className = "brand-badge";
root.appendChild(brandBadge);

const errorOverlay = document.createElement("div");
errorOverlay.className = "error-overlay";
errorOverlay.style.display = "none";
root.appendChild(errorOverlay);

const players = {
  video: createVideoPlayer,
  menu: createMenuPlayer,
  carousel: createCarouselPlayer,
  slides: createSlidesPlayer,
  custom: createCustomPlayer,
};

const fallbackImage =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop stop-color="%23ffb100" offset="0%"/><stop stop-color="%2347d3ff" offset="100%"/></linearGradient></defs><rect width="1200" height="800" fill="%2305070f"/><rect width="1200" height="800" fill="url(%23g)" opacity="0.22"/><text x="50%" y="50%" font-family="Barlow,Helvetica,sans-serif" font-size="64" fill="%23f6f8fb" text-anchor="middle" dominant-baseline="middle">Viasanto</text></svg>';

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
    playlist: [],
  },
  menu: {
    title: "Cafetería de Autor",
    subtitle: "Brindamos café de especialidad y pastelería fresca",
    highlight: "Abierto 7:30 — 20:00",
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
          {
            name: "Latte Vainilla",
            price: "$3.500",
            description: "Vainilla natural, leche sedosa, espresso intenso",
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
      {
        name: "Dulces del Día",
        items: [
          {
            name: "Kuchen Berries",
            price: "$3.100",
            description: "Base crocante, crema de vainilla y frutos rojos",
          },
          {
            name: "Croissant Almendras",
            price: "$2.400",
            description: "Mantequilla francesa, relleno praliné tostado",
          },
        ],
      },
    ],
    footerNote: "Pregunta por alternativas sin lactosa y endulzantes naturales.",
  },
  carousel: {
    headline: "Pasa y pruébalo",
    ribbon: "Café de especialidad",
    speedSeconds: 36,
    items: [
      {
        title: "Latte con Avena",
        price: "$3.400",
        image: fallbackImage,
        tag: "Favorito",
        meta: "Espresso + leche de avena cremosa",
      },
      {
        title: "Sandwich Pastrami",
        price: "$5.900",
        image: fallbackImage,
        tag: "Nuevo",
        meta: "Pan masa madre, pickles caseros, mostaza Dijon",
      },
      {
        title: "Affogato",
        price: "$3.800",
        image: fallbackImage,
        tag: "Dulce",
        meta: "Gelato de vainilla bañado en espresso doble",
      },
      {
        title: "Cold Brew Naranja",
        price: "$3.500",
        image: fallbackImage,
        tag: "Verano",
        meta: "Cold brew macerado con rodajas de naranja fresca",
      },
    ],
  },
  slides: {
    slides: [
      { type: "image", src: fallbackImage, duration: 9 },
      {
        type: "html",
        duration: 8,
        html: `<div class="html-slide">
          <div style="font-size: clamp(22px, 3vw, 42px); font-weight: 700; letter-spacing: -0.01em;">Viasanto Caffè</div>
          <div style="margin-top: 10px; color: #b8c0cf; max-width: 680px;">
            Café tostado localmente, panadería artesanal y recetas hechas a mano. Síguenos en @viasantocaffe
          </div>
        </div>`,
      },
    ],
  },
  custom: {
    html: `<div class="custom-mode" style="display:grid;place-items:center;background:radial-gradient(circle at 30% 30%,#0b1426,#05070f);">
      <div style="text-align:center;max-width:960px;">
        <div style="letter-spacing:0.16em; text-transform:uppercase; color:#47d3ff; font-size:16px; margin-bottom:12px;">Vitrina viva</div>
        <div style="font-size: clamp(32px, 4vw, 62px); font-weight: 700; margin-bottom: 12px;">Historias que pasan al ritmo de la vereda</div>
        <div style="color:#b8c0cf; font-size: clamp(18px, 2vw, 28px); line-height: 1.5;">Mira nuestras preparaciones, ofertas y recomendaciones. Todo se actualiza en línea desde el panel de administración.</div>
      </div>
    </div>`,
  },
  sequence: {
    defaultDuration: 20,
    steps: [],
  },
};

const state = {
  config: DEFAULT_CONFIG,
  current: null,
  refreshTimer: null,
  sequenceTimer: null,
};

function mergeConfig(incoming = {}) {
  return {
    ...DEFAULT_CONFIG,
    ...incoming,
    video: { ...DEFAULT_CONFIG.video, ...(incoming.video || {}) },
    menu: { ...DEFAULT_CONFIG.menu, ...(incoming.menu || {}) },
    carousel: {
      ...DEFAULT_CONFIG.carousel,
      ...(incoming.carousel || {}),
    },
    slides: { ...DEFAULT_CONFIG.slides, ...(incoming.slides || {}) },
    custom: { ...DEFAULT_CONFIG.custom, ...(incoming.custom || {}) },
    sequence: { ...DEFAULT_CONFIG.sequence, ...(incoming.sequence || {}) },
  };
}

async function fetchConfig() {
  const url = `/api/tv/${tvId}/config.json?ts=${Date.now()}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) {
    throw new Error(`Config fetch failed (${res.status})`);
  }
  return res.json();
}

function setTheme(config) {
  const rootEl = document.documentElement;
  if (config.background) {
    root.style.background = config.background;
    rootEl.style.setProperty("--bg", config.background);
  }
  if (config.accent) {
    rootEl.style.setProperty("--accent", config.accent);
  }
  if (config.textColor) {
    rootEl.style.setProperty("--text", config.textColor);
  }
}

function setOrientation(config) {
  const isPortrait = (config.orientation || "landscape") === "portrait";
  document.body.classList.toggle("portrait", isPortrait);
  document.body.classList.toggle("landscape", !isPortrait);
}

function showError(message) {
  errorOverlay.textContent = message;
  errorOverlay.style.display = "grid";
}

function hideError() {
  errorOverlay.style.display = "none";
}

function renderBrand(text) {
  brandBadge.textContent = text || "Viasanto";
}

function renderMode(mode, modeConfig, globalConfig) {
  const factory = players[mode] || players.carousel;
  const wrapper = document.createElement("div");
  wrapper.className = `mode-wrapper ${mode}-mode`;
  modeHost.appendChild(wrapper);

  // Mount the selected player
  const instance = factory(wrapper, modeConfig || {}, globalConfig);

  requestAnimationFrame(() => wrapper.classList.add("active"));

  // Clean up previous player after the transition ends
  if (state.current) {
    const prev = state.current;
    prev.wrapper.classList.remove("active");
    setTimeout(() => {
      prev.instance?.destroy?.();
      prev.wrapper.remove();
    }, globalConfig.transitionMs || DEFAULT_CONFIG.transitionMs);
  }

  state.current = { wrapper, instance };
}

function stopSequence() {
  if (state.sequenceTimer) {
    clearTimeout(state.sequenceTimer);
    state.sequenceTimer = null;
  }
}

function startSequence(config) {
  stopSequence();
  const steps = Array.isArray(config.sequence?.steps) ? config.sequence.steps : [];
  if (!steps.length) {
    renderMode("carousel", config.carousel || {}, config);
    return;
  }

  const defaultDuration = Math.max(3, Number(config.sequence?.defaultDuration || 20));
  let index = 0;

  const playStep = () => {
    const step = steps[index % steps.length];
    const modeName = step?.mode && players[step.mode] ? step.mode : "carousel";
    const mergedConfig = {
      ...(config[modeName] || {}),
      ...(step?.config || {}),
    };
    const duration = Math.max(
      3,
      Number(step?.durationSeconds || defaultDuration)
    );

    renderMode(modeName, mergedConfig, config);

    state.sequenceTimer = setTimeout(() => {
      index = (index + 1) % steps.length;
      playStep();
    }, duration * 1000);
  };

  playStep();
}

async function loadAndRender(initial = false) {
  try {
    const incoming = await fetchConfig();
    state.config = mergeConfig(incoming);
    setTheme(state.config);
    setOrientation(state.config);
    renderBrand(state.config.brand);
    hideError();
    if (state.config.mode === "sequence") {
      startSequence(state.config);
    } else {
      stopSequence();
      const mode = state.config.mode || "carousel";
      renderMode(mode, state.config[mode] || {}, state.config);
    }
  } catch (error) {
    console.error(error);
    showError(
      "No se pudo cargar la configuración. Mostrando diseño de respaldo."
    );
    if (initial) {
      state.config = DEFAULT_CONFIG;
      setTheme(state.config);
      setOrientation(state.config);
      renderMode(state.config.mode, state.config[state.config.mode], state.config);
    }
  }
}

function startRefreshLoop() {
  const intervalMs =
    Math.max(30, Number(state.config.refreshSeconds) || 90) * 1000;
  if (state.refreshTimer) {
    clearTimeout(state.refreshTimer);
  }
  state.refreshTimer = setTimeout(async () => {
    await loadAndRender();
    startRefreshLoop();
  }, intervalMs);
}

// Kick off
loadAndRender(true).then(startRefreshLoop);
