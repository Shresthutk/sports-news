import React, { Component } from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import News from "./News";

export default class Home extends Component {
  render() {
    return (
      <div>
        <>
          <Navbar />
          <Header heading="News IN-Glance" />
          <News />
        </>
      </div>
    );
  }
}
