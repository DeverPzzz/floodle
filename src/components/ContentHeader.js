import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ContentHeader = ({ onChange, sidebarState }) => {
  return (
    <header className="header">
      <div className="header__left-column">
        <button
          className={
            sidebarState ? "button button--rotated button--active" : "button"
          }
          onClick={() => onChange(!sidebarState)}
        >
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
};

export default ContentHeader;
