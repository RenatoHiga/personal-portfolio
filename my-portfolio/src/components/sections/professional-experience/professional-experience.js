import { Component, h } from "preact";

class ProfessionalExperience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section class="professional-experience overflow-auto">
                <h1 class="huge-title text-center mb-50 mt-75">
                    Formação e Experiência profissional
                </h1>
                <div class="container mb-75">
                    <div class="professional-experience__lists-container">
                    <div class="professional-experience__companies-list">
                        <div>
                        <h2 class="professional-experience__location-name">TrackCash</h2>
                        <h3 class="professional-experience__job-role">
                            Estagiário de T.I. <br />Período - Junho/2019 até Dezembro/2019
                        </h3>
                        <ul class="professional-experience__activities-list">
                            <li>
                            Desenvolvimento de funcionalidades novas e correções de bugs
                            no sistema em PHP com Laravel;
                            </li>
                            <li>
                            Verificação de dados entre dados do banco de dados MySQL e
                            API's de E-commerce's através do Postman
                            </li>
                        </ul>
                        </div>

                        <div class="mt-30">
                        <h2 class="professional-experience__location-name">TrackCash</h2>
                        <h3 class="professional-experience__job-role">
                            Desenvolvedor Back-end Júnior <br />Período - Dezembro/2019 até
                            Agosto/2021
                        </h3>
                        <ul class="professional-experience__activities-list">
                            <li>
                            Desenvolvimento de funcionalidades novas e correções de bugs
                            no sistema em PHP com Laravel;
                            </li>
                            <li>
                            Integração de API’s de E-commerce’s para extração de dados;
                            </li>
                            <li>
                            Montagem de Telas com HTML, CSS, JavaScript, JQuery e
                            renderização dos dados do back-end com o Blade do Laravel;
                            </li>
                            <li>Auxílio para os estagiários.</li>
                        </ul>
                        </div>

                        <div class="mt-30">
                        <h2 class="professional-experience__location-name">Grupo 3D</h2>
                        <h3 class="professional-experience__job-role">
                            Desenvolvedor Front-End <br />Período - Outubro/2021 até
                            atualmente.
                        </h3>
                        <ul class="professional-experience__activities-list">
                            <li>
                            Manutenção no Sistema Front-End em JavaScript e Angular do
                            cliente;
                            </li>
                            <li>Ajustes nos Layouts das páginas com CSS e Sass;</li>
                            <li>
                            Integração de API’s back-end disponibilizadas pelo cliente;
                            </li>
                            <li>Manutenção de Layouts de sites Wordpress com Elementor;</li>
                        </ul>
                        </div>
                    </div>

                    <div class="professional-experience__education-list">
                        <div>
                        <h2 class="professional-experience__location-name">
                            Colégio Técnico Opção
                        </h2>
                        <h3 class="professional-experience__job-role">
                            Técnico em Informática <br />Período - Janeiro/2016 até
                            Dezembro/2018
                        </h3>
                        <ul class="professional-experience__activities-list">
                            <li>
                            Desenvolvimento de softwares com diversas linguagens e,
                            frameworks: PHP com Code Igniter, JavaScript com JQuery, C,
                            C++, C# e Java.
                            </li>
                            <li>Manutenção e configuração de computadores</li>
                        </ul>
                        </div>

                        <div class="mt-30">
                        <h2 class="professional-experience__location-name">
                            Universidade Paulista (UNIP)
                        </h2>
                        <h3 class="professional-experience__job-role">
                            Análise e Desenvolvimento de Sistemas <br />Período -
                            Janeiro/2019 até Dezembro/2020
                        </h3>
                        <ul class="professional-experience__activities-list">
                            <li>Desenvolvimento de softwares com C, C# e Java.</li>
                            <li>Análise do ciclo de vida de um software</li>
                            <li>Metodologias ágeis</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="professional-experience__path-clip-filler"></div>
            </section>
        );
    }
}

export default ProfessionalExperience;