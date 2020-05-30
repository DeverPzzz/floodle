import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LayoutRightColumn extends React.Component {
  render() {
    function handleClick() {
      let menuButton = document.querySelector(".menu-button");
      let sidebar = document.querySelector(".sidebar");
      sidebar.classList.toggle("sidebar--opened");
      menuButton.classList.toggle("button--rotated");
      menuButton.classList.toggle("button--active");
    }

    function handleInput() {
      let dateText = document.querySelector(".date-text");
      let charCounter = document.querySelector(".char-counter");
      charCounter.textContent = dateText.value.length;
    }

    return (
      <section className="layout__right-column">
        <header className="header">
          <div className="header__left-column">
            <button className="menu-button button" onClick={handleClick}>
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

        <main className="content">
          <section className="date-inner">
            <div className="date-header">22.05.20</div>
            <TextareaAutosize
              className="date-text"
              aria-label="minimum height"
              rowsMin={1}
              placeholder="Short note on the date"
              maxlength="150"
              onInput={handleInput}
            />
            <span className="datetext-counter">
              <span className="char-counter">0</span>/150 characters used
            </span>
          </section>

          <section className="text-inner">
            <div className="text-inner__separator"></div>
            <div
              className="textBox"
              autofocus="autofocus"
              contenteditable="true"
            ></div>
          </section>
        </main>
      </section>
    );
  }
}

export default LayoutRightColumn;
