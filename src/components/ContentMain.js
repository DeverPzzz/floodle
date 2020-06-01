import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ContentBody extends React.Component {
  constructor() {
    super();
    this.state = {
      datetextValue: "",
      textboxValue: "",
    };
  }

  handleChange = (event) => {
    let dateText = document.querySelector(".date-text");
    let charCounter = document.querySelector(".char-counter");
    charCounter.textContent = dateText.value.length;

    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main className="content">
        <form className="date-inner">
          <div className="date-header">22.05.20</div>
          <TextareaAutosize
            className="date-text"
            name="datetextValue"
            value={this.state.datetextValue}
            rowsMin={1}
            placeholder="Short note on the date"
            maxlength="150"
            onChange={this.handleChange}
          />
          <span className="datetext-counter">
            <span className="char-counter">0</span>/150 characters used
          </span>
        </form>

        <form className="text-inner">
          <div className="text-inner__separator"></div>
          <div
            className="textBox"
            name="textboxValue"
            autofocus="autofocus"
            contenteditable="true"
            onChange={this.handleChange}
          >
            {this.state.textboxValue}
          </div>
        </form>
      </main>
    );
  }
}

export default ContentBody;
