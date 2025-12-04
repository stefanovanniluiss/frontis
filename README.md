# Viasanto Digital Signage System

Dynamic storefront content for **two independent 75" TVs** at the front of Viasanto Caffè.

Each TV runs a web page in kiosk mode (e.g. `https://dastefano.cl/tv1.html` and `https://dastefano.cl/tv2.html`) and displays:

- Full-screen **videos**
- **Digital menu boards**
- An **endless horizontal product carousel** that moves from left to right, aligned with people walking on the sidewalk
- Optionally, slide decks or custom HTML layouts

The system is designed to be:

- **Non-interactive** (no user input on the TVs)
- **Admin-controlled** from a browser-based panel
- **Configurable per TV** (each screen can show different content)
- **Simple to host**: HTML + CSS + vanilla JavaScript + JSON configuration

This README is written to give **very explicit instructions** to a developer or AI code generator (Codex / Copilot) about how to implement the system.

---

## 1. Goals and Non-Goals

### 1.1 Goals

- Have **two independent TV pages** (`tv1.html`, `tv2.html`) that:
  - Always run full-screen with no visible browser UI
  - Automatically fetch their configuration from a JSON endpoint
  - Loop content forever without user interaction
  - Can be updated remotely via an admin panel

- Provide an **admin panel**:
  - To configure **each TV separately**
  - To choose what type of content each TV displays
  - To define playlists, carousels, and menu boards without editing code

- Keep the implementation:
  - **Lightweight** (no heavy frameworks required)
  - **Modular** (each content type has a dedicated “player” module)
  - **Extendable** (easy to add new display modes later)

### 1.2 Non-Goals (for now)

- No time-of-day scheduling (e.g., “show breakfast at 9:00, lunch at 13:00”).  
  > Future feature, but the architecture should not block it.
- No authentication / login system in this first version.  
  > Admin panel can be protected later via HTTP auth, VPN, or similar.
- No complex CMS. Content is configured through simple forms in the admin panel and stored as JSON.

---

## 2. High-Level Architecture

The system consists of three main pieces:

1. **TV Clients**  
   - `tv1.html`, `tv2.html` – tiny HTML shells  
   - `tv-client.js` – main client logic  
   - Mode-specific player modules (video, menu, carousel, slides, custom)

2. **Admin Panel**  
   - `admin.html` – single-page admin UI  
   - `admin.js` – logic for loading/saving config and updating the UI  
   - `admin.css` – styling

3. **Configuration Files / API**  
   - JSON configs per TV, e.g. `/api/tv/1/config.json` and `/api/tv/2/config.json`  
   - Optionally served as static JSON or from a backend (Node/PHP/etc.)

The TVs read the config, decide which **mode** to run, and activate the corresponding “player” module.

---

## 3. Tech Stack and Constraints

- **HTML5**, **CSS3**, **vanilla JavaScript (ES6+)**
- No required framework (React/Vue/etc.). If added later, they should not be mandatory.
- The system must run on **Chromium-based browsers** in kiosk mode.
- TV resolution is **75" 4K** (3840x2160), but the layout must also handle 1080p gracefully.

---

## 4. URLs and TV Mapping

Each TV should open a fixed URL:

- TV 1 → `https://dastefano.cl/tv1.html`
- TV 2 → `https://dastefano.cl/tv2.html`

Implementation detail:

- **`tv1.html` and `tv2.html` must be tiny wrappers** that set a TV ID and load the shared TV client script.

Example:

```html
<!-- tv1.html -->
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>Viasanto TV 1</title>
  <link rel="stylesheet" href="/public/tv.css" />
</head>
<body>
  <div id="tv-root"></div>
  <script>
    window.TV_ID = 1;
  </script>
  <script src="/public/tv-client.js"></script>
</body>
</html>
