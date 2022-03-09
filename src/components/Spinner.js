import React, { Component } from 'react'


export default class Spinner extends Component {
  render() {
    return (
      <div className="container">
      <progress className="progress is-small is-primary" max="100"></progress>
      </div>
    )
  }
}
