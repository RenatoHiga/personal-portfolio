import { Component, h } from "preact";
import Carousel from "../../carousel/carousel";

class PersonalProjects extends Component {
  constructor() {
    super();

    this.state = {
      carouselActiveIndex: 0,
      carouselJson: [
        {
          title: "Fitness Training - TCC",
          description:
            "Trabalho de Conclusão de Curso: Sistema de Acadêmia para Alunos e Professores",
          image: "cadastra_exercicio.png",
        },
      ],
      carouselItems: [
        <div class="personal-projects__image-container active">
          <div class="personal-projects__image-overlay">
            <h1 class="text-center huge-title">Fitness Training - TCC</h1>
            <h2 class="text-center mb-50 personal-projects__small-description">
              Trabalho de Conclusão de Curso: Sistema de Acadêmia para Alunos e
              Professores
            </h2>
          </div>
          <img
            src="assets/images/personal-projects/fitness-training/cadastra_exercicio.png"
            class="personal-projects__image"
          />
        </div>,
        <div class="personal-projects__image-container d-none">
          <div class="personal-projects__image-overlay">
            <h1 class="text-center huge-title">Portifólio Pessoal</h1>
            <h2 class="text-center mb-50 personal-projects__small-description">
              Portifólio pessoal com design simples para exibir minhas
              habilidades e projetos
            </h2>
          </div>
          <img
            src="images/personal-projects/personal-portifolio/personal-portifolio-main.png"
            class="personal-projects__image"
          />
        </div>,
        <div class="personal-projects__image-container d-none">
          <div class="personal-projects__image-overlay">
            <h1 class="text-center huge-title">Portifólio Pessoal</h1>
            <h2 class="text-center mb-50 personal-projects__small-description">
              Portifólio pessoal com design simples para exibir minhas
              habilidades e projetos
            </h2>
          </div>
          <img
            src="images/personal-projects/placeholder/placeholder.jpg"
            class="personal-projects__image"
          />
        </div>,
      ],
    };

    this.carousel = null;
    this.images = null;
    this.imagesLength = null;
  }

  componentDidMount() {
    console.log("hey!");
  }

  testFunction = () => {
    this.state.carouselItems[0].props.class =
      "personal-projects__image-container d-none";
    console.log(this.state.carouselItems[0].props.class);

    this.state.carouselItems = this.state.carouselItems;
    console.log(this.state.carouselItems);
  };

  render() {
    return (
      <section class="personal-projects horizontal-center-content">
        <div class="personal-projects__container">
          <h1 class="mb-20 huge-title text-center">Projetos Pessoais</h1>

          <Carousel />
        </div>

        <div class="personal-projects__path-clip-filler"></div>
      </section>
    );
  }
}

// const carousel = document.getElementById("carousel");

// console.log(document.getElementById("carousel"));

// let images = carousel.children;
// const imagesLength = images.length - 2;
// // -2 because the last two elements are the buttons

// function getCurrentImageIndex() {
//   for (let index = 0; index < images.length; index++) {
//     const className = images[index].className;

//     const activeImageFound = className.indexOf("active") >= 0 ? true : false;

//     if (activeImageFound) {
//       return index;
//     }
//   }
// }

// // function cleanAnimationClasses(index) {
// //   images[index].className.remove("personal-projects__next-image");
// //   images[index].className.remove("personal-projects__previous-image");
// // }

// function nextImage() {
//   const currentIndex = getCurrentImageIndex();
//   const currentImage = images[currentIndex];

//   const isFinalIndex = imagesLength === currentIndex + 1;

//   let nextIndex = 0;
//   if (isFinalIndex) {
//     nextIndex = 0;
//   } else {
//     nextIndex = currentIndex + 1;
//   }

//   const nextImage = images[nextIndex];

//   currentImage.classList.add("d-none");
//   currentImage.classList.remove("active");
//   currentImage.classList.remove("personal-projects__next-image");
//   currentImage.classList.remove("personal-projects__previous-image");

//   nextImage.classList.remove("d-none");
//   nextImage.classList.add("personal-projects__next-image");
//   nextImage.classList.add("active");
// }

// function previousImage() {
//   const currentIndex = getCurrentImageIndex();
//   const currentImage = images[currentIndex];

//   let previousIndex;
//   const finalPreviousIndex = currentIndex === 0;

//   if (finalPreviousIndex) {
//     previousIndex = imagesLength - 1;
//   } else {
//     previousIndex = currentIndex - 1;
//   }

//   const previousImage = images[previousIndex];

//   currentImage.classList.add("d-none");
//   currentImage.classList.remove("active");
//   currentImage.classList.remove("personal-projects__next-image");
//   currentImage.classList.remove("personal-projects__previous-image");

//   previousImage.classList.remove("d-none");
//   previousImage.classList.add("personal-projects__previous-image");
//   previousImage.classList.add("active");
// }

export default PersonalProjects;
