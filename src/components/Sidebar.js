import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "./Card";
import cardsData from "./cardsData";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: false }); //change while have API
    fetch("") //insert link while have API
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          loading: false,
        });
      });
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__header">
          <div className="logo">Floodle</div>
        </div>

        <div className="cards">
          {" "}
          {this.state.loading
            ? "loading..."
            : cardsData
                .reverse()
                .map((card) => <Card key={card.id} card={card} />)}
        </div>

        <div className="sidebar__footer">
          <button className="info-button button">
            Created by <br />
            ...
          </button>
          <button className="settings-button button">
            <FontAwesomeIcon icon={["fas", "cog"]} />
          </button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
