<script setup lang="ts">
import { ref } from 'vue'

let projects = ref([
  {
    title: 'Portfólio',
    description:
      'Meu portfólio pessoal simples, para exibir minhas habilidades de design, programação e projetos relacionados a programação.'
  },
  {
    title: 'Sistema de Acadêmia',
    description: 'Trabalho de TCC durante do curso técnico em informática'
  },
  {
    title: 'Slotify - Spotify Clone',
    description:
      'Projeto de um clone do spotify feito durante um curso, para estudar a construção de um sistema com PHP, MySQL e JavaScript'
  }
])
let currentActiveIndex = ref(0)

function getImageUrl(url: string) {
  const new_url = new URL(url, import.meta.url).href
  return new_url
}
</script>

<template>
  <div class="carousel">
    <div class="carousel__previous">
      <img
        :src="getImageUrl('../assets/icons/arrow_back.svg')"
        alt="anterior"
        class="carousel__icon-previous"
      />
    </div>
    <div class="carousel__content">
      <div
        class="carousel__image"
        v-for="(project, index) in projects"
        :key="index"
        v-show="currentActiveIndex == index"
      >
        <div class="carousel__description">
          <h1 class="carousel__title">{{ project.title }}</h1>
          <p class="carousel__text">
            {{ project.description }}
          </p>
          <div class="carousel__selection-dots">
            <!-- <div class="carousel__dot carousel__dot--active"></div> -->
            <div class="carousel__dot" v-for="number in projects.length" :key="number"></div>
          </div>
        </div>
      </div>

      <!-- <div class="carousel__image">
        <div class="carousel__description">
          <h1 class="carousel__title">Título do projeto</h1>
          <p class="carousel__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam!
          </p>
          <div class="carousel__selection-dots">
            <div class="carousel__dot carousel__dot--active"></div>
            <div class="carousel__dot"></div>
          </div>
        </div>
      </div> -->
    </div>
    <div class="carousel__next">
      <img
        :src="getImageUrl('../assets/icons/arrow_forward.svg')"
        alt="próximo"
        class="carousel__icon-next"
      />
    </div>
  </div>
</template>

<style scoped></style>
