import React, { Component } from "react";
import "../App.css";

export default class Header extends Component {
  render() {
    return (
      <header className="container">
        <h1>Domenico</h1>
        <nav className="container">
          <a href="#"><h2>Home</h2></a>
          <a href="#"><h2>Projects</h2></a>
          <a href="#"><h2>About</h2></a>
          <a href="#"><h2>Contact</h2></a>
        </nav>
      </header>
    );
  }
}