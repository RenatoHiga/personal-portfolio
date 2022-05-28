import { Component, h } from "preact";

class Item extends Component {
    constructor(props) {
        super(props);
    }

    addClasses = () => {
        if (this.props.active) {

            if (this.props.activateNextImageAnimation) {
                return "personal-projects__image-container active personal-projects__next-image"
            } else if (this.props.activatePreviousImageAnimation) {
                return "personal-projects__image-container active personal-projects__previous-image"
            } else {
                return "personal-projects__image-container active"
            }

        } else {
            return "personal-projects__image-container d-none"
        }
    }

    render() {
        return (
            <div class={this.addClasses()}>
                <div class="personal-projects__image-overlay">
                    <h1 class="text-center huge-title">{this.props.title}</h1>
                    <h2 class="text-center mb-50 personal-projects__small-description">
                        {this.props.description}
                    </h2>
                </div>
                <img
                    src={'assets/images/personal-projects/' + this.props.imgFolder + '/' + this.props.imgName}
                    class="personal-projects__image"
                />
            </div>
        );
    }

}

export default Item;