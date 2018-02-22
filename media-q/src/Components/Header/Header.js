import React, { Component } from "react";
import "./Header.css";

//

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggled: !prevState.isToggled
    }));
    console.log(this.state);
  }

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

        <button id="menuButton" onClick={this.handleClick}>
          MENU
          <div>
            <div className="micon"> </div>
            <div className="micon"> </div>
            <div className="micon"> </div>
          </div>
        </button>

        {this.state.isToggled && (
          <div id="menu2">
            <a className=""> SERVICES </a>
            <a className=""> PORTFOLIO </a>
            <a className=""> ABOUT </a>
            <a className=""> TEAM </a>
            <a className=""> CONTACT </a>
          </div>
        )}
      </div>
    );
  }
}

export default Header;
