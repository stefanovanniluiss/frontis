export function createCustomPlayer(wrapper, config = {}) {
  wrapper.classList.add("custom-mode");
  wrapper.innerHTML =
    config.html ||
    `<div class="video-fallback">Agrega HTML personalizado en el panel de administración.</div>`;
  return {
    destroy() {},
  };
}
