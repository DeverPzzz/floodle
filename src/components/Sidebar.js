import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Card from "./Card";
import cardsData from "./cardsData";

class LayoutLeftColumn extends React.Component {
  render() {
    const cardComponents = cardsData
      .reverse()
      .map((item) => <Card key={item.id} card={item} />);

    return (
      <section className="layout__left-column">
        <div className="sidebar">
          <div className="sidebar__header">
            <div className="logo">Floodle</div>
          </div>

          <div className="cards">{cardComponents}</div>

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
      </section>
    );
  }
}

export default LayoutLeftColumn;
