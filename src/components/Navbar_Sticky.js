import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import HeaderComponent from './HeaderComponent.js';
//import FooterComponent from './FooterComponent.js';
import Home       from './pages/Home';
import Dashboard  from './pages/Dashboard';
import CreateAds  from './pages/CreateAds';
import Campaigns  from './pages/Campaigns';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
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
        <HeaderComponent></HeaderComponent>
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
                        <DropdownItem>
                            <Link to="/home" className="navbar-menu-link">Home</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to="/dashboard" className="navbar-menu-link">Dashboard</Link>
                        </DropdownItem>
                        <DropdownItem>
                            <Link to="/createAds" className="navbar-menu-link">Create Ads</Link>
                        </DropdownItem> 
                        <DropdownItem>
                            <Link to="/campaigns" className="navbar-menu-link">Campaigns</Link>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
           
            </div>
          </Navbar>
          <Route exact path="/home" component={Home} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/createAds" component={CreateAds} />
          <Route exact path="/campaigns" component={Campaigns} />
          </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default Navbar_Sticky;
