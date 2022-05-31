import { Component, h } from "preact";

class Button extends Component {
  constructor(props) {
    super(props);

    this.state = {
      className: "",
      arrowImage: "",
    };

    if (this.props.type === "right") {
      this.setState({
        className:
          "personal-projects__button-container personal-projects__button-container--right",
        arrowImage: "../../assets/icons/arrow_forward.svg",
      });
    } else if (this.props.type === "left") {
      this.setState({
        className:
          "personal-projects__button-container personal-projects__button-container--left",
        arrowImage: "../../assets/icons/arrow_back.svg",
      });
    }
  }

  render() {
    return (
      <div class={this.state.className}>
        <button class="personal-projects__button" onclick={this.props.click}>
          <img src={this.state.arrowImage} alt="Projeto anterior" />
        </button>
      </div>
    );
  }
}

export default Button;
