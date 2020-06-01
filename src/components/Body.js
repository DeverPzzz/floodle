import React from "react";

import Sidebar from "./Sidebar";
import ContentHeader from "./ContentHeader";
import ContentMain from "./ContentMain";

class Body extends React.Component {
  render() {
    return (
      <body>
        <div className="layout">
          <section className="layout__left-column">
            <Sidebar />
          </section>

          <section className="layout__right-column">
            <ContentHeader />
            <ContentMain />
          </section>
        </div>
      </body>
    );
  }
}

export default Body;
