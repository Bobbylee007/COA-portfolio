// Toggle theme
const toggleBtn = document.querySelector(".toggle-btn");
const toggleIcon = document.querySelector(".toggleIcon");
const switchIcon = document.querySelector(".switchIcon");
const coaLogo = document.querySelector(".coa-logo");

let darkMode = false;

toggleIcon?.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark-theme");
  darkMode
    ? switchIcon.setAttribute("href", "/assert/icons/normal/moon.svg")
    : switchIcon.setAttribute("href", "/assert/icons/normal/sun.svg");

  darkMode
    ? coaLogo.setAttribute("src", "assert/icons/logo/coa-light.svg")
    : coaLogo.setAttribute("src", "/assert/icons/logo/coa-dark.svg");

  darkMode = !darkMode;
});

// toggle-button Logic
const btnExpand = document.querySelectorAll(".content-expand");
const btnDom = document.querySelectorAll(".btnDom");

let toggleValue = false;
btnDom.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    toggleValue
      ? (btnExpand[index].style.display = "grid")
      : (btnExpand[index].style.display = "none");
    toggleValue
      ? (btn.textContent = "view less")
      : (btn.textContent = "view more");
    toggleValue = !toggleValue;
  });
});

// Slider Logic
