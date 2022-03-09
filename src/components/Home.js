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
          <Header heading="Sports IN-Glance" />
          <News pagesize="10" />
        </>
      </div>
    );
  }
}
