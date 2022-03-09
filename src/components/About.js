import React, { Component } from 'react'
import Abouticon from './Abouticon'
import Header from './Header'
import Navbar from './Navbar'




export default class About extends Component {
    render() {
        return (
            <div className="custom-height ">
                <Navbar/>
                <Header heading="About"/>
                <div className="container">
                <p className="light-font title is-5 is-flex is-align-items-center custom-height-2">This is a react js project which uses class based component.<br></br>
                newsapi.org is used with sports filter and country India <br></br>to provid headlines that keeps you updated at a glance!
                </p>
                </div>
            </div>
        )
    }
}
