import React, { Component } from 'react'
import abouticon from "./about-icon.png"

export default class Abouticon extends Component {
  render() {
    return (
      <div>
        <img src={abouticon} alt="abouticon" className="image is-128x128" />
      </div>
    )
  }
}
