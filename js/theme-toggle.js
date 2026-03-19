(function () {
  const root = document.documentElement;
  const storageKey = "theme";
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  function getPreferredTheme() {
    const stored = localStorage.getItem(storageKey);
    if (stored === "light" || stored === "dark") return stored;
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  function applyTheme(theme) {
    // Default theme is dark (no attribute needed), set light explicitly.
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    toggleBtn.setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
  }

  function toggleTheme() {
    const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    localStorage.setItem(storageKey, next);
    applyTheme(next);
  }

  applyTheme(getPreferredTheme());
  toggleBtn.addEventListener("click", toggleTheme);
})();

