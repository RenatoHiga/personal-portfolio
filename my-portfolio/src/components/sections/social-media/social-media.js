import { Component, h } from "preact";

class SocialMedia extends Component {
    constructor(props) {
        super(props);
    }

    getDiscordName = (event) => {
        event.preventDefault();
        console.log("TODO: Button to copy discord name and code")
    }

    render() {
        return (
            <section class="social-media">
                <h1 class="huge-title text-center mt-75">Contatos / Redes sociais</h1>

                <div class="social-media__list mt-75">
                    <a href="https://wa.me/5512991411028" class="social-media__list-item">
                        <div class="social-media__icon-container">
                            <img src="images/icons/whatsapp.svg" class="social-media__icon" />
                        </div>
                        <p class="social-media__name"><span>WhatsApp</span></p>
                    </a>

                    <a href="mailto: renatoka14@gmail.com" class="social-media__list-item">
                        <div class="social-media__icon-container">
                            <img src="images/icons/gmail.svg" class="social-media__icon" />
                        </div>
                        <p class="social-media__name"><span>E-mail</span></p>
                    </a>

                    <a
                        href="#"
                        class="social-media__list-item"
                        onclick={this.getDiscordName}
                    >
                        <div class="social-media__icon-container">
                            <img src="images/icons/discord.svg" class="social-media__icon" />
                        </div>
                        <p class="social-media__name"><span>Discord</span></p>
                    </a>

                    <a href="https://github.com/RenatoHiga" class="social-media__list-item">
                        <div class="social-media__icon-container">
                            <img src="images/icons/github.svg" class="social-media__icon" />
                        </div>
                        <p class="social-media__name"><span>Github</span></p>
                    </a>
                </div>
            </section>
        );
    }

}

export default SocialMedia;