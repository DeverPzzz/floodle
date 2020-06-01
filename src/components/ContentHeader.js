import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ContentHeader extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = (event) => {
    let menuButton = document.querySelector(".menu-button");
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("sidebar--opened");
    menuButton.classList.toggle("button--rotated");
    menuButton.classList.toggle("button--active");
  }

  render() {
    return (
      <header className="header">
        <div className="header__left-column">
          <button className="menu-button button" onClick={this.handleClick}>
            <FontAwesomeIcon icon={["fas", "bars"]} />
          </button>
        </div>

        <div className="header__right-column">
          <button className="button">H</button>
          <button className="button">T</button>
          <button className="button">
            <FontAwesomeIcon icon={["far", "plus-square"]} />
          </button>
        </div>
      </header>
    );
  }
}

export default ContentHeader;
