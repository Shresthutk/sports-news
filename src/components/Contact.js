import React, { Component } from 'react'
import Header from './Header'
import Navbar from './Navbar'

export default class Contact extends Component {
    render() {
        return (
            <div className="custom-height">
                <Navbar/>
                <Header heading="Contact" />
                <div className="container">
                    <ul className="title is-5 is-flex is-align-items-center is-flex-direction-column is-justify-content-center">
                        <li><a href="https://www.linkedin.com/in/utkarsh-shresth-5251191b6/"className="light-font">Linkedin</a></li>
                        <li><a href="https://github.com/Shresthutk"className="light-font">Github</a></li>
                        <li><a href="mailto:shresthutk62@gmail.com?Subject=Regarding%20speech%20utils"className="light-font">Email</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
