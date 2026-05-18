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
// using  index to move thing with help of forEach

const slides = document.querySelectorAll(".item-slide");
const btnLeft = document.querySelector(".prev");
const btnRight = document.querySelector(".next");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
}

// next slide
function nextSlide() {
  currentSlide++;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

// previous slide
function prevSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  showSlide(currentSlide);
}

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

// auto slider
setInterval(nextSlide, 3000);

// initialize
showSlide(currentSlide);

//dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);

    dot.classList.remove("active-dot");
    dots[index].classList.add("active-dot");
  });
});

// Slider Logic
const formField = document.querySelector(".formField");
const label = document.querySelector("label");
const inputField = document.querySelectorAll(".inputField");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const subjectField = document.querySelector("#subject");
const messageField = document.querySelector("#message");

const helperText = document.querySelector(".helperText");
const alertText = document.querySelector(".alertText");

const showAlert = (message, color) => {
  const text = `<p class=${color}> ${message}</p>`;
  return document.body.appendChild(text);
};

subjectField.addEventListener("click", (e) => {
  e.preventDefault();
  const name = nameField.value;
  const email = emailField.value;
  const subject = subjectField.value;
  const message = messageField.value;

  if (!name || !email || !subject || !message) {
    showAlert(
      (message = "please provide messages and other input"),
      (color = "warningAlert"),
    );
  }

  console.log("trying to send mail");
});
