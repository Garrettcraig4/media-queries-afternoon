import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Center from "./Components/Center/Center";
import Survices from "./Components/Services/Services";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Center />
        <Survices />
      </div>
    );
  }
}

export default App;
