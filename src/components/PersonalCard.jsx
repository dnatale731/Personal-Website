import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "../App.css";

export default class PersonalCard extends Component {
  render() {
    return (
      <div>
        <Card>
          <div className="left">Image</div>
          <div className="right">
            <div className="hello">
              <h2>Hello everybody! I Am</h2>
              <h1>Domenico Natale</h1>
              <p>Computer Science Student</p>
            </div>
            <div className="description">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Blanditiis illum sunt accusamus, sapiente ratione possimus harum
                quis, tempora et, totam aspernatur nemo dolor reprehenderit
                ipsum? Rerum modi molestias quos soluta.
              </p>
            </div>
            <div className="contact">
              <img />
              <p>(718) 689-2054</p>
              <img />
              <p>dnatale731@gmail.com</p>
              <img />
              <p>Staten Island, NY 10306</p>
            </div>
            <div className="social">
              <a href="https://github.com/dnatale731">
                <img src="#" alt="GitHub" />
              </a>
              <a href="https://www.linkedin.com/in/dnatale731/">
                <img src="#" alt="LinkedIn" />
              </a>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
