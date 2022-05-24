import { Component, h } from "preact";

class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      activeItemIndex: 0,
      itemsHtml: [
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
  }

  nextItem = () => {
    const finalIndex = this.state.itemsHtml.length - 1;
    const isLastIndex = finalIndex === this.state.activeItemIndex;

    console.log(finalIndex, this.state.activeItemIndex);

    if (isLastIndex) {
      this.state.activeItemIndex = 0;
    } else {
      this.state.activeItemIndex = this.state.activeItemIndex + 1;
    }
  };

  render() {
    return (
      <div class="personal-projects__carousel" id="carousel">
        {this.state.itemsHtml}

        {/* <!-- Buttons --> */}
        <div class="personal-projects__button-container personal-projects__button-container--left">
          <button class="personal-projects__button" onclick={this.nextItem}>
            <img src="images/icons/arrow_back.svg" alt="Projeto anterior" />
          </button>
        </div>

        {/* <div class="personal-projects__button-container personal-projects__button-container--right">
          <button class="personal-projects__button" onclick={nextImage}>
            <img src="images/icons/arrow_forward.svg" alt="Próximo projeto" />
          </button>
        </div> */}
      </div>
    );
  }
}

export default Carousel;
