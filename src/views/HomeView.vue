<script setup lang="ts">
import { onMounted, ref } from 'vue'
import emailjs from '@emailjs/browser'

let reply_email = ref('')
let subject = ref('')
let message = ref('')
let emailIsBeingSent = ref(false)

function sendEmail() {
  emailIsBeingSent.value = true
  message.value = strip(message.value)

  if (reply_email.value == '' || subject.value == '' || message.value == '') {
    alert(
      'Por favor, preencha todos os campos necessários do formulário, para poder enviar a mensagem!'
    )
    emailIsBeingSent.value = false
    return
  }

  emailjs.init('MNGc7_32ixg9CXLig')
  emailjs
    .sendForm('contact_service', 'contact_form', '#contact_form')
    .then(
      function () {
        alert('Sua mensagem foi enviada com sucesso!')
      },
      function (error) {
        console.log('error: ', error)
      }
    )
    .then(() => {
      emailIsBeingSent.value = false
    })
}

function strip(html: string) {
  let doc = new DOMParser().parseFromString(html, 'text/html')
  return doc.body.textContent || ''
}

onMounted(() => {})
</script>

<template>
  <main>
    <section class="section who-am-i">
      <div class="section-content">
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
          Sou um desenvolvedor com 4 anos de experiência profissional, focado em sempre trazer os<br />
          melhores resultados, ajudar e crescer junto com outros desenvolvedores!
        </p>

        <div class="most-used-technologies">
          <p>Tecnologias que mais utilizo:</p>
          <p class="most-used-technologies__technologies">
            PHP | Laravel | Mysql | Javascript | Vue
          </p>
        </div>
      </div>
    </section>

    <section class="section projects">
      <div class="section-content flex-column">
        <h1 class="projects__title text-center">Projetos realizados</h1>

        <div class="carousel-wrapper">
          <div class="carousel">
            <div class="carousel__previous">
              <img
                src="@/assets/icons/arrow_back.svg"
                alt="anterior"
                class="carousel__icon-previous"
              />
            </div>
            <div class="carousel__content">
              <div class="carousel__image">
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
              </div>
            </div>
            <div class="carousel__next">
              <img
                src="@/assets/icons/arrow_forward.svg"
                alt="próximo"
                class="carousel__icon-next"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section professional-experience">
      <div class="section-content">
        <h1 class="section-title">Experiência profissional</h1>

        <div></div>

        <div class="container-professional-experiences">
          <div class="card">
            <h2 class="professional-experience__business-name">TrackCash</h2>
            <p class="professional-experience__role">Estagiário de T.I.</p>
            <p class="professional-experience__period">Período: 06/2019 até 12/2019</p>
            <p class="professional-experience__description">
              - Desenvolvimento de funcionalidades novas e correções de bugs no sistema em PHP com
              Laravel;<br />
              - Verificação de dados entre de dados de API's de E-commerce's e dados do banco de
              dados MySQL através da ferramenta Postman
            </p>
          </div>

          <div class="card">
            <h2 class="professional-experience__business-name">Delfos Consultoria</h2>
            <p class="professional-experience__role">Desenvolvedor Front-end</p>
            <p class="professional-experience__period">Período: 10/2021 até 05/2022</p>
            <p class="professional-experience__description">
              - Manutenção, implementação de funcionalidades e integrações de API’s no sistema
              Angular.js, de acordo com as necessidades do cliente; - Design de páginas com
              Wordpress e Elementor.
            </p>
          </div>

          <div class="card">
            <h2 class="professional-experience__business-name">TrackCash</h2>
            <p class="professional-experience__role">Estagiário de T.I.</p>
            <p class="professional-experience__period">Período: 06/2019 até 12/2019</p>
            <p class="professional-experience__description">
              - Desenvolvimento de funcionalidades novas e correções de bugs no sistema em PHP com
              Laravel;<br />
              - Verificação de dados entre de dados de API's de E-commerce's e dados do banco de
              dados MySQL através da ferramenta Postman
            </p>
          </div>

          <div class="card">
            <h2 class="professional-experience__business-name">TrackCash</h2>
            <p class="professional-experience__role">Estagiário de T.I.</p>
            <p class="professional-experience__period">Período: 06/2019 até 12/2019</p>
            <p class="professional-experience__description">
              - Desenvolvimento de funcionalidades novas e correções de bugs no sistema em PHP com
              Laravel;<br />
              - Verificação de dados entre de dados de API's de E-commerce's e dados do banco de
              dados MySQL através da ferramenta Postman - Verificação de dados entre de dados de
              API's de E-commerce's e dados do banco de dados MySQL através da ferramenta Postman
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section contacts">
      <div class="section-content">
        <h1 class="section-title">Contatos</h1>

        <div class="container-social-media-buttons">
          <a
            class="social-media-button"
            href="https://www.linkedin.com/in/renato-higa-higuti-a40ab3156"
            target="_blank"
          >
            <img src="@/assets/icons/linkedin.svg" alt="Github" class="social-media-button__icon" />
            <span class="social-media-button__name">LinkedIn</span>
          </a>
          <a class="social-media-button" href="https://github.com/RenatoHiga" target="_blank">
            <img src="@/assets/icons/github.svg" alt="Linkedin" class="social-media-button__icon" />
            <span class="social-media-button__name">GitHub</span>
          </a>
        </div>

        <form class="contact-form" id="contact_form" @submit.prevent="sendEmail()">
          <h2>Formulário para contato</h2>

          <div class="contact-form-content">
            <div class="contact-form__subject-email-row">
              <div class="input-field input-field--50-width">
                <label for="email" class="input-field__label">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="reply_email"
                  class="input-field__field"
                  placeholder="exemplo@email.com"
                />
              </div>

              <div class="input-field input-field--50-width">
                <label for="subject" class="input-field__label">Assunto</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  v-model="subject"
                  placeholder="Nome do assunto"
                  class="input-field__field"
                />
              </div>
            </div>

            <div class="input-field input-field-message">
              <label for="message" class="input-field__label">Sua mensagem</label>
              <textarea
                type="text"
                name="message"
                id="message"
                v-model="message"
                placeholder="Escreva aqui sua mensagem"
                class="input-field__field input-field__message"
                rows="6"
              ></textarea>
            </div>

            <button class="contact-form__button-send" :disabled="emailIsBeingSent">
              Enviar
              <img
                src="@/assets/icons/send.svg"
                alt="enviar"
                id="send_message_icon"
                :class="{ 'send-message-icon--hide-icon': emailIsBeingSent }"
              />
              <div
                class="loading-wheel"
                :class="{ 'loading-wheel--show-loading': emailIsBeingSent }"
              >
                <div class="loading-wheel__rounded-bar"></div>
              </div>
            </button>
          </div>
        </form>
      </div>
    </section>
  </main>
</template>
