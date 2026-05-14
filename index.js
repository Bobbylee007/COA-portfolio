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
// const btnLeft = document.querySelector(".prev");
// const btnRight = document.querySelector(".next");
// const slider = document.querySelector(".slide");

// let slide = 0

// const pushLeft = ()=>{
//   slider.classList.add("lastSlide")
//   slider.setProperty("transform", `translateX(${slide - 56}%)`);
//         slide =slide

// }
// btnLeft.addEventListener('click',pushLeft)

// setInterval(()=>{
//   if(slide === 100){
//     slider.classList.add("lastSlide")
//     slider.setProperty("transform", `translateX(${slide - 56}%)`);
//   }
//    slider.classList.replace("lastSlide", "nextSlide");
// },1000)

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
