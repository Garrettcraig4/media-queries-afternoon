import React, { Component } from "react";
import "./Center.css";

class Center extends Component {
  render() {
    return (
      <div className="Center">
        <h4 id="oneText" className="centerText">
          Welcome To Our Studio!
        </h4>
        <h1 id="twoText" className="centerText">
          IT'S NICE TO MEET YOU
        </h1>
        <button className="centerText" id="moreButton">
          TELL ME MORE
        </button>
      </div>
    );
  }
}
export default Center;
