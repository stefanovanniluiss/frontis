export function createSlidesPlayer(wrapper, config = {}) {
  wrapper.classList.add("slides");

  const slides = Array.isArray(config.slides) ? config.slides : [];
  if (!slides.length) {
    const empty = document.createElement("div");
    empty.className = "video-fallback";
    empty.textContent = "Agrega diapositivas en el panel para verlas aquí.";
    wrapper.appendChild(empty);
    return {};
  }

  const elements = slides.map((slide) => {
    const slideEl = document.createElement("div");
    slideEl.className = "slide";
    if (slide.type === "html") {
      const html = document.createElement("div");
      html.className = "html-slide";
      html.innerHTML = slide.html || "";
      slideEl.appendChild(html);
    } else {
      const img = document.createElement("img");
      img.src = slide.src;
      img.alt = slide.alt || "Slide";
      slideEl.appendChild(img);
    }
    wrapper.appendChild(slideEl);
    return slideEl;
  });

  let index = 0;
  let timer = null;

  const show = (idx) => {
    elements.forEach((el, i) => {
      if (i === idx) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
    const duration =
      Math.max(3, slides[idx].duration || config.defaultDuration || 8) * 1000;
    timer = setTimeout(() => {
      show((idx + 1) % slides.length);
    }, duration);
  };

  show(index);

  return {
    destroy() {
      clearTimeout(timer);
    },
  };
}
