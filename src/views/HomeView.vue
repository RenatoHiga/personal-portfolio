<script setup lang="ts"></script>

<template>
  <main>
    <section class="who-am-i">
      <div class="portrait">
        <div class="portrait__image-container">
          <div class="portrait__background"></div>
          <img
            class="portrait__image"
            src="@/assets/images/portrait.png"
            alt="Minha foto"
            width="250"
            height="250"
          />
        </div>
      </div>

      <h1 class="my-name">Renato Higa Higuti</h1>
      <h2 class="my-role">Desenvolvedor Full-stack</h2>

      <p class="my-description">
        Sou um desenvolvedor com 4 anos de experiência profissional, focado em sempre trazer os
        melhores resultados, ajudar e crescer junto com outros desenvolvedores!
      </p>

      <span class="most-used-technologies">
        <p>Tecnologias que mais utilizo:</p>
        <p>PHP | Laravel | Mysql | Javascript | Vue</p>
      </span>
    </section>

    <section class="projects">
      <h1>Projetos realizados</h1>

      <div class="carousel">
        <div class="carousel__next"></div>
        <div class="carousel__content">
          <div class="carousel__image">
            <div class="carousel__description">
              <h1 class="carousel__title">Título do projeto</h1>
              <p class="carousel__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam!
              </p>
            </div>
          </div>
        </div>
        <div class="carousel__previous"></div>
      </div>
    </section>

    <section class="professional-experience">
      <h1>Experiência profissional</h1>

      <div class="card">
        <h2>Nome da empresa</h2>
        <p>Cargo</p>
        <p>Período ativo</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero itaque, repellat quia qui
          consectetur debitis!
        </p>
      </div>
    </section>

    <section class="contacts">
      <button>
        <img src="" alt="" />
      </button>
    </section>
  </main>
</template>
