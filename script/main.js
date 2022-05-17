function getDiscordName(event) {
  event.preventDefault();
  navigator.clipboard.writeText("Renato.H.H.#3096");

  alert("Nome e ID do discord copiados!");
}

const carousel = document.getElementById("carousel");
let images = carousel.children;
const imagesLength = images.length - 2;
// -2 because the last two elements are the buttons

function getCurrentImageIndex() {
  for (let index = 0; index < images.length; index++) {
    const className = images[index].className;

    const activeImageFound = className.indexOf("active") >= 0 ? true : false;

    if (activeImageFound) {
      return index;
    }
  }
}

function cleanAnimationClasses(index) {
  images[index].className.remove("personal-projects__next-image");
  images[index].className.remove("personal-projects__previous-image");
}

function nextImage() {
  const currentIndex = getCurrentImageIndex();
  const currentImage = images[currentIndex];

  const isFinalIndex = imagesLength === currentIndex + 1;

  let nextIndex = 0;
  if (isFinalIndex) {
    nextIndex = 0;
  } else {
    nextIndex = currentIndex + 1;
  }

  const nextImage = images[nextIndex];

  currentImage.classList.add("d-none");
  currentImage.classList.remove("active");
  currentImage.classList.remove("personal-projects__next-image");
  currentImage.classList.remove("personal-projects__previous-image");

  nextImage.classList.remove("d-none");
  nextImage.classList.add("personal-projects__next-image");
  nextImage.classList.add("active");
}

function previousImage() {
  const currentIndex = getCurrentImageIndex();
  const currentImage = images[currentIndex];

  let previousIndex;
  const finalPreviousIndex = currentIndex === 0;

  if (finalPreviousIndex) {
    previousIndex = imagesLength - 1;
  } else {
    previousIndex = currentIndex - 1;
  }

  const previousImage = images[previousIndex];

  currentImage.classList.add("d-none");
  currentImage.classList.remove("active");
  currentImage.classList.remove("personal-projects__next-image");
  currentImage.classList.remove("personal-projects__previous-image");

  previousImage.classList.remove("d-none");
  previousImage.classList.add("personal-projects__previous-image");
  previousImage.classList.add("active");
}
