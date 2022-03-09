import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="title is-3 my-3 light-font">{this.props.heading}</h1>
        </div>
      </div>
    );
  }
}
