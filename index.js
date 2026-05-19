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



// Form validation
const formField = document.querySelector(".formField");
const labels = document.querySelectorAll(".label");
const inputFields = document.querySelectorAll(".inputField");
const nameField = document.querySelector("#name");
const emailField = document.querySelector("#email");
const subjectField = document.querySelector("#subject");
const messageField = document.querySelector("#message");

//Remove label
inputFields.forEach((input, index) => {
  input.addEventListener("input", () => {
    if (input.value.trim() !== "") {
      labels[index].style.display = "none";
    } else {
      labels[index].style.display = "block";
    }
  });
});

// Display Alert
const showAlert = (message, title, color) => {
  let text = document.createElement("div");
  text.innerHTML = `
      <div class="${color}">
        <h5>${title}</h5>
        <p>${message}</p>
  </div> `;
  document.body.append(text);
  return setTimeout(() => text.remove(), 2000);
};

//Download
const cvButton = document.querySelectorAll(".btn-cv");
cvButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    showAlert("CV Downloaded successfully", "Success", "successAlert");
  });
});

//form vallidation
formField.addEventListener("submit", (e) => {
  const name = nameField.value.trim();
  const email = emailField.value.trim();
  const subject = subjectField.value.trim();
  const message = messageField.value.trim();
  
  if (!name || !email || !subject || !message) {
    e.preventDefault();
    showAlert("Please provide all inputs", "Validation Error", "errorAlert");
    return;
  }
  showAlert("Sending message...", "Success", "successAlert");
});
