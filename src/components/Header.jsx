import React, { Component } from "react";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul className="nav">
              <li><a href="#">Home</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}