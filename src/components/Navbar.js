import React, { Component } from "react";
import logo from "./logo.jpg";
import { Link } from "react-router-dom";

function ham(){
    var burger=document.querySelector('.burger');
    var nav=document.querySelector('#navMenu');
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active'); 
    
}

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className="navbar is-dark"
        >
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src={logo} width="60" height="28" className="circle" alt="logo" />
            </Link>

            <span
                onClick={ham}
              className="navbar-burger burger" data-target="navMenu"
            >
              <span ></span>
              <span ></span>
              <span ></span>
            </span>
          </div>

          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item is-active" to="/">
                Home
              </Link>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link " >More</a>

                <div className="navbar-dropdown">
                  <Link className="navbar-item " to="/About">
                    About
                  </Link>
                  <Link className="navbar-item " to="/Contact">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
