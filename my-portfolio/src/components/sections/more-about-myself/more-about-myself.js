import { h } from "preact";

import myPhoto from "../../../assets/images/my-photo/my-photo.png";

const MoreAboutMyself = () => (
  <section class="more-about-myself">
    <div class="more-about-myself__container">
      <div class="more-about-myself__text">
        <h1 class="more-about-myself__title mb-20 huge-title">
          Olá! Meu nome é Renato! 😁
        </h1>
        <p>
          Eu sou um desenvolvedor que adora programação, computadores, escutar
          músicas de metal, se divertir enquanto aprende alguma técnica nova e
          adora compartilhar os conhecimentos! 💻️
        </p>
        <br />

        <p>
          Sou focado no que eu faço e tento sempre dar meu melhor. Mesmo que eu
          cometo um erro mesmo fazendo meu melhor, eu considero o erro como uma
          grande oportunidade de aprendizado e amadurecimento para mim. 📈
        </p>
        <br />

        <p>
          Acredito fortemente que trabalho em equipe é extremamente importante,
          pois juntos, conseguimos ir muito além do esperado! 🤝
        </p>
      </div>

      <div class="my-photo">
        <div class="my-photo__background"></div>

        <div class="my-photo__image-container">
          <img class="my-photo__image" src={myPhoto} />
        </div>
      </div>
    </div>

    <div class="more-about-myself__path-clip-filler"></div>
  </section>
);

export default MoreAboutMyself;
