import React from "react";
import { render } from "react-dom";

import NavBar from "./components/navbar";
import BottomAppBar from "./components/footer";
import HomePage from "./components/home";

const App = () => {
  return (
    <>
      <NavBar />
      {/* <HomePage /> */}
      <BottomAppBar />
    </>
  );
};

render(<App />, document.querySelector("#react-root"));
