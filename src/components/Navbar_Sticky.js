import React, { Component } from 'react';
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

//import logo from './logo.svg';
 
import RE_Parallax from  './RE_Parallax.js'

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
         <header className="App-header">
          
          
          <h1>SI Systems Wave Dissipation</h1>
        </header>
      
       
        <div className="bg-info">
          <Navbar color="dark" dark expand="md" sticky="top">
            <NavbarBrand href="/">si-wds</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                  </DropdownItem>
                    <DropdownItem>
                      Option 2
                  </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                  </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <RE_Parallax></RE_Parallax>
        </div>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
        <p>This is below the element in which the navbar is &quot;stuck&quot; to</p>
      </div>
    );
  }
}

export default Navbar_Sticky;
