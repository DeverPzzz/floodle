import React from "react";

import "./App.css";

import Head from "./components/Head";
import Body from "./components/Body";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

class App extends React.Component {
  render() {
    return (
      <html>
        <Head />
        <Body />
      </html>
    );
  }
}

export default App;
