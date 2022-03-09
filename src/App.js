import React, { Component } from 'react'
import Home from './components/Home';
import About from "./components/About"
import Contact from './components/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            </Routes>
        </HashRouter>
      </>
    )
  }
}
