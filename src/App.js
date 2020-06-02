import React, { useState } from "react";

import "App.css";

import Sidebar from "components/Sidebar";
import ContentHeader from "components/ContentHeader";
import ContentMain from "components/ContentMain";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

const App = () => {
  const [cardId, setCardId] = useState();
  const [sidebarState, setSidebarState] = useState(false);

  return (
    <div className="layout">
      <section className="layout__left-column">
        <Sidebar onChange={setCardId} sidebarState={sidebarState} />
      </section>

      <section className="layout__right-column">
        <ContentHeader onChange={setSidebarState} sidebarState={sidebarState} />
        <ContentMain cardId={cardId} />
      </section>
    </div>
  );
};

export default App;
