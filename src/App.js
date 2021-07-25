import React, { Component } from 'react'

import './App.css';


import Navbar from './components/Navbar';
import Header from "./components/Header"
import Contenet from './components/Contenet'
import Footer from './components/Footer'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Header/>
        <Contenet/>
        <Footer/>
      </div>
    )
  }
}


