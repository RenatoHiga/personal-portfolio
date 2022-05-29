import { Component, h } from "preact";
import Carousel from "../../carousel/carousel";

class PersonalProjects extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section class="personal-projects">
        <div class="personal-projects__container">
          <h1 class="mb-20 huge-title text-center">Projetos Pessoais</h1>

          <Carousel />
        </div>

        <div class="personal-projects__path-clip-filler"></div>
      </section>
    );
  }
}

export default PersonalProjects;
