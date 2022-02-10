import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../App.css";

export default class PersonalCard extends Component {
  render() {
    return (
      <Card>
        <img src="#" />
        <div id="personal">
          <h3>Hello Everybody, I Am</h3>
          <h2>Domenico Natale</h2>
          <h4>Computer Science Major</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus
            earum omnis asperiores temporibus, obcaecati incidunt placeat
            tempore expedita labore quod ipsum reprehenderit harum libero
            corporis deleniti doloribus ducimus unde.
          </p>
          <address>
            <div className="container">
              <img src="#" />
              <p>Test</p>
            </div>
            
          </address>
        </div>
      </Card>
    );
  }
}
