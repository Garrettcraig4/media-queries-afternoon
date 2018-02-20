import React, { Component } from "react";
import "./Header.css";

function handleClick() {}

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1 id="title"> Start Bootstrap </h1>
        <div className="alllinks">
          <a className="linkas"> SERVICES </a>
          <a className="linkas"> PORTFOLIO </a>
          <a className="linkas"> ABOUT </a>
          <a className="linkas"> TEAM </a>
          <a className="linkas"> CONTACT </a>
        </div>
        <button id="menuButton" onClick={handleClick}>
          MENU
          <div>
            <div className="micon"> </div>
            <div className="micon"> </div>
            <div className="micon"> </div>
          </div>
        </button>
      </div>
    );
  }
}

export default Header;
