export function createVideoPlayer(wrapper, config = {}) {
  wrapper.classList.add("video-player");

  const playlist = Array.isArray(config.playlist) ? config.playlist : [];

  if (!playlist.length) {
    const fallback = document.createElement("div");
    fallback.className = "video-fallback";
    fallback.textContent = "Agrega videos en el panel para iniciar la reproducción.";
    wrapper.appendChild(fallback);
    return {};
  }

  const videoEl = document.createElement("video");
  videoEl.autoplay = true;
  videoEl.playsInline = true;
  videoEl.controls = false;
  videoEl.preload = "auto";
  videoEl.muted = true;
  videoEl.crossOrigin = "anonymous";

  const sourceEl = document.createElement("source");
  videoEl.appendChild(sourceEl);
  wrapper.appendChild(videoEl);

  let index = 0;
  let currentItem = null;
  let failures = 0;
  let fallbackEl = null;
  let fallbackShown = false;

  const loadItem = (idx) => {
    currentItem = playlist[idx % playlist.length];
    index = idx % playlist.length;
    if (fallbackEl) {
      fallbackEl.remove();
      fallbackEl = null;
      fallbackShown = false;
    }
    videoEl.loop = !!currentItem.loop;
    videoEl.muted = currentItem.mute !== false;
    sourceEl.src = currentItem.src;
    sourceEl.type = currentItem.type || "video/mp4";
    videoEl.load();
    videoEl.play()
      .then(() => {
        failures = 0;
      })
      .catch(() => {
        // On autoplay block, attempt muted replay
        videoEl.muted = true;
        videoEl
          .play()
          .then(() => {
            failures = 0;
          })
          .catch(() => showError("No se pudo reproducir el video."));
      });
  };

  const showError = (message) => {
    if (fallbackShown) return;
    fallbackEl = document.createElement("div");
    fallbackEl.className = "video-fallback";
    fallbackEl.textContent = message;
    wrapper.appendChild(fallbackEl);
    fallbackShown = true;
    videoEl.pause();
  };

  videoEl.addEventListener("ended", () => {
    if (!videoEl.loop) {
      loadItem(index + 1);
    }
  });

  videoEl.addEventListener("error", () => {
    failures += 1;
    if (failures >= playlist.length) {
      showError("Ningún video disponible. Revisa las URLs en el panel.");
      return;
    }
    loadItem(index + 1);
  });

  loadItem(index);

  return {
    destroy() {
      videoEl.pause();
      videoEl.src = "";
    },
  };
}
