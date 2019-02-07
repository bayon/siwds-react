import React, { Component } from 'react';

import './App.css';

 
import NavbarSticky from './components/Navbar_Sticky.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarSticky></NavbarSticky>
      </div>
    );
  }
}

export default App;
