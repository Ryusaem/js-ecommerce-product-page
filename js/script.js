const mobileMenu = document.querySelector(".mobile-menu");
const menuContainer = document.querySelector(".menu-container");
const menuContainerClose = document.querySelector(".menu-container__close");

const previousButton = document.querySelector(".galery-container__previous");
const nextButton = document.querySelector(".galery-container__next");
let currentImage = document.querySelectorAll(".galery-container__image");

const miniature = document.querySelectorAll(".miniature");
let activeMiniature = document.querySelector(".active-miniature");

let modalContainer = document.querySelector(
  ".galery-container__modal-container"
);
let modalClose = document.querySelector(".modal-container__close");
let modalPreviousButton = document.querySelector(".modal-container__previous");
let modalNextButton = document.querySelector(".modal-container__next");

const minusButton = document.querySelector(".range-container__minus");
const plusButton = document.querySelector(".range-container__plus");
const rangeValue = document.querySelector(".range-container__range-value");

function toggleMenu() {
  menuContainer.classList.toggle("active");
}

function nextImage() {
  let currentImageNumber = +currentImage[0].src.match(/[0-9](?=.jpg)/).join("");
  let nextImageNumber = (currentImageNumber + 1) % 5;

  currentImage.forEach((element) => {
    element.src = `images/image-product-${
      nextImageNumber === 0 ? 1 : nextImageNumber
    }.jpg`;
  });
}

function previousImage() {
  let currentImageNumber = +currentImage[0].src.match(/[0-9](?=.jpg)/).join("");
  let previousImageNumber = (currentImageNumber - 1) % 5;

  currentImage.forEach((element) => {
    element.src = `images/image-product-${
      previousImageNumber === 0 ? 4 : previousImageNumber
    }.jpg`;
  });
}

function displaySelectedImage() {
  currentImage.forEach((element) => {
    element.src = this.src;
  });

  activeMiniature.classList.remove("active-miniature");
  this.classList.add("active-miniature");

  activeMiniature = this; // Update active miniature
}

function addElement() {
  rangeValue.textContent = +rangeValue.textContent + 1;
}

function removeElement() {
  rangeValue.textContent =
    rangeValue.textContent === "0" ? 0 : +rangeValue.textContent - 1;
}

function closeModal() {
  modalContainer.style.display = "none";
}

function openModal() {
  modalContainer.style.display = "grid";
}

// Event Listeners
mobileMenu.addEventListener("click", toggleMenu);
menuContainerClose.addEventListener("click", toggleMenu);

previousButton.addEventListener("click", previousImage);
nextButton.addEventListener("click", nextImage);

minusButton.addEventListener("click", removeElement);
plusButton.addEventListener("click", addElement);

miniature.forEach((element) => {
  element.addEventListener("click", displaySelectedImage);
});

// MODAL
currentImage.forEach((element) => {
  element.addEventListener("click", openModal);
});

modalClose.addEventListener("click", closeModal);

modalPreviousButton.addEventListener("click", previousImage);
modalNextButton.addEventListener("click", nextImage);

// Close modal when clicking outside
window.addEventListener("click", (e) => {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
