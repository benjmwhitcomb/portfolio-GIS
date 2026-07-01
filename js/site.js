/* Theme toggle (persisted) + mobile menu. No dependencies. */
(function () {
  var root = document.body;
  var stored = localStorage.getItem("theme");
  if (stored === "dark") root.classList.add("dark");

  var toggle = document.getElementById("theme-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      root.classList.toggle("dark");
      localStorage.setItem("theme", root.classList.contains("dark") ? "dark" : "light");
    });
  }

  var burger = document.getElementById("menu-toggle");
  var links = document.getElementById("nav-links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      links.classList.toggle("open");
    });
  }
})();
