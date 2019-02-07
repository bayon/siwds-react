import React, { Component } from 'react';

import './App.css';
import HeaderComponent from './components/HeaderComponent.js';
import  BottomFooter from './components/BottomFooter.js';
 
import NavbarSticky from './components/Navbar_Sticky.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <HeaderComponent></HeaderComponent>
        <NavbarSticky></NavbarSticky>
        <BottomFooter></BottomFooter>
      </div>
    );
  }
}

export default App;
