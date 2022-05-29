import { Component, h } from "preact";

import Item from "./item";

class Carousel extends Component {
  constructor() {
    super();

    this.state = {
      activeItemIndex: 0,
      items: [
        {
          title: "Fitness Training - TCC",
          description:
            "Trabalho de Conclusão de Curso: Sistema de Acadêmia para Alunos e Professores",
          imgName: "cadastra_exercicio.png",
          imgFolder: "fitness-training",
          active: true,
          activateNextImageAnimation: false,
          activatePreviousImageAnimation: false,
          link: "https://github.com/RenatoHiga/fitness-training-tcc"
        },
        {
          title: "Portifólio Pessoal",
          description:
            "Portifólio pessoal com design simples para exibir minhas habilidades e projetos",
          imgName: "personal-portfolio-main.png",
          imgFolder: "personal-portfolio",
          active: false,
          activateNextImageAnimation: false,
          activatePreviousImageAnimation: false,
          link: null,
        },
      ],
      itemsHtml: [],
    };

    this.renderItems();
  }

  renderItems = () => {
    let itemsHtml = this.state.items.map((item) => (
      <Item
        title={item.title}
        description={item.description}
        imgName={item.imgName}
        imgFolder={item.imgFolder}
        active={item.active}
        activateNextImageAnimation={item.activateNextImageAnimation}
        activatePreviousImageAnimation={item.activatePreviousImageAnimation}
        link={item.link}
      />
    ));
    this.setState({ itemsHtml: itemsHtml });
  };

  hideItem = (item) => {
    item.active = false;
    item.activateNextImageAnimation = false;
    item.activatePreviousImageAnimation = false;
  }

  showItem = (item, animationType) => {
    item.active = true;

    if (animationType === 'nextItem') {
      item.activateNextImageAnimation = true;
    } else if (animationType === 'previousItem') {
      item.activatePreviousImageAnimation = true;
    }
  }

  showNextItem = () => {
    const previousIndex = this.state.activeItemIndex;

    const finalIndex = this.state.itemsHtml.length - 1;
    const isLastIndex = finalIndex === this.state.activeItemIndex;

    if (isLastIndex) {
      this.state.activeItemIndex = 0;
    } else {
      this.state.activeItemIndex = this.state.activeItemIndex + 1;
    }

    let items = this.state.items;
    const activeItem = items[this.state.activeItemIndex];
    const previousItem = items[previousIndex];

    this.showItem(activeItem, "nextItem");
    this.hideItem(previousItem);

    this.renderItems();
  };

  showPreviousItem = () => {
    const previousItemIndex = this.state.activeItemIndex;

    const firstIndex = 0;
    const isFirstIndex = firstIndex === this.state.activeItemIndex;

    if (isFirstIndex) {
      const lastIndex = this.state.itemsHtml.length - 1;
      this.state.activeItemIndex = lastIndex;
    } else {
      this.state.activeItemIndex = this.state.activeItemIndex - 1;
    }

    let items = this.state.items
    const activeItem = items[this.state.activeItemIndex];
    const previousItem = items[previousItemIndex];

    this.showItem(activeItem, "previousItem");
    this.hideItem(previousItem);

    this.renderItems();
  };

  render() {
    return (
      <div class="personal-projects__carousel" id="carousel">
        {this.state.itemsHtml}

        {/* <!-- Buttons --> */}
        <div class="personal-projects__button-container personal-projects__button-container--left">
          <button class="personal-projects__button" onclick={this.showPreviousItem}>
            <img src="../../assets/icons/arrow_back.svg" alt="Projeto anterior" />
          </button>
        </div>

        <div class="personal-projects__button-container personal-projects__button-container--right">
          <button class="personal-projects__button" onclick={this.showNextItem}>
            <img src="../../assets/icons/arrow_forward.svg" alt="Próximo projeto" />
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
