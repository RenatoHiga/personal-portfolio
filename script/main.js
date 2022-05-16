function getDiscordName(event) {
  event.preventDefault();
  navigator.clipboard.writeText("Renato.H.H.#3096");

  alert("Nome e ID do discord copiados!");
}

const carousel = document.getElementById("carousel");
let images = carousel.children;

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
  const nextImage = images[currentIndex + 1];

  // images[0].classList.add("d-none");

  // images[1].classList.remove("d-none");
  // images[1].classList.add("personal-projects__next-image");
  console.log(getCurrentImageIndex());
}

function previousImage() {
  let carousel = document.getElementById("carousel");
  let images = carousel.children;

  images[1].classList.add("d-none");
  images[0].classList.remove("d-none");
  images[0].classList.add("personal-projects__previous-image");
}
