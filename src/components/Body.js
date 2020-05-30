import React from "react";

import LayoutLeftColumn from "./Sidebar";
import LayoutRightColumn from "./Content";

class Body extends React.Component {
  render() {
    return (
      <body>
        <div className="layout">
          <LayoutLeftColumn />
          <LayoutRightColumn />
        </div>
      </body>
    );
  }
}

export default Body;
