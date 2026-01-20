const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));

    if (!expanded) {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.gap = "10px";
      nav.style.position = "absolute";
      nav.style.right = "18px";
      nav.style.top = "64px";
      nav.style.padding = "14px";
      nav.style.borderRadius = "16px";
      nav.style.border = "1px solid rgba(255,255,255,.12)";
      nav.style.background = "rgba(7,11,20,.92)";
      nav.style.backdropFilter = "blur(10px)";
    } else {
      nav.style.display = "";
      nav.style.position = "";
      nav.style.top = "";
      nav.style.right = "";
      nav.style.padding = "";
      nav.style.borderRadius = "";
      nav.style.border = "";
      nav.style.background = "";
      nav.style.backdropFilter = "";
    }
  });
}
