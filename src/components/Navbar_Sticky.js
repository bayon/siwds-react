import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

 
import Home       from './pages/Home';
import System  from './pages/System';
import Information  from './pages/Information';
import Gallery  from './pages/Gallery';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

 
class Navbar_Sticky extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        
        <div>
        <Router>
          <div >
          <Navbar color="light" light expand="md" sticky="top" className="navigation-bar">
            <div className="container">
                <NavbarBrand href="/">S.I. Systems</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    
                      
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                      Menu
                    </DropdownToggle>
                      <DropdownMenu right>
                      {/**pages: Home , The System, Information, Gallery , Contact Us */}
                        <DropdownItem>
                            
                              <Link to="/home" className="navbar-menu-link">Home</Link>
                              
                           
                        </DropdownItem>
                        <DropdownItem>
                            <Link to="/system" className="navbar-menu-link">The System</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to="/information" className="navbar-menu-link">Information</Link>
                        </DropdownItem> 
                        <DropdownItem>
                            <Link to="/gallery" className="navbar-menu-link">Gallery</Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
           
            </div>
          </Navbar>
          <Route exact path="/home" component={Home} />
          <Route exact path="/system" component={System} />
          <Route exact path="/information" component={Information} />
          <Route exact path="/gallery" component={Gallery} />
          </div>
          </Router>
        </div>
       
      </div>
    );
  }
}

export default Navbar_Sticky;
