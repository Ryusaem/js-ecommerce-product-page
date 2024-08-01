const mobileMenu = document.querySelector(".mobile-menu");
const menuContainer = document.querySelector(".menu-container");
const menuContainerClose = document.querySelector(".menu-container__close");

const previousButton = document.querySelector(".galery-container__previous");
const nextButton = document.querySelector(".galery-container__next");

let currentImage = document.querySelector(".galery-container__image");

function toggleMenu() {
  menuContainer.classList.toggle("active");
  console.log("clicked");
}

function nextImage() {
  let currentImageNumber = +currentImage.src.match(/[0-9](?=.jpg)/).join("");
  let nextImageNumber = (currentImageNumber + 1) % 5;

  currentImage.src = `images/image-product-${
    nextImageNumber === 0 ? 1 : nextImageNumber
  }.jpg`;
}

function previousImage() {
  let currentImageNumber = +currentImage.src.match(/[0-9](?=.jpg)/).join("");
  let previousImageNumber = (currentImageNumber - 1) % 5;

  currentImage.src = `images/image-product-${
    previousImageNumber === 0 ? 4 : previousImageNumber
  }.jpg`;
}

// Event Listeners
mobileMenu.addEventListener("click", toggleMenu);
menuContainerClose.addEventListener("click", toggleMenu);

previousButton.addEventListener("click", previousImage);
nextButton.addEventListener("click", nextImage);
