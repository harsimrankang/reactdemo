import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./navbar";
import Menu from "./menu";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Menu />
      </div>
    );
  }
}

export default App;
