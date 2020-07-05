import React, {Component} from 'react';
import {Nav, NavbarBrand, NavItem, Navbar, NavbarToggler, Collapse, Jumbotron }  from 'reactstrap';
import {NavLink } from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);

        this.state= {
            isNavOpen:false
        }

       this.toggleNav= this.toggleNav.bind(this); 
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <>
              <Navbar light style={{backgroundColor:"#5a7698" , height:"100px"}} expand="md">
                  <div className="container">
                      <NavbarToggler onClick={this.toggleNav} />
                      <NavbarBrand className="mr-auto" href="/home" >
                          <img src="logo192.png" height="30" width="41" alt="logo" /> 
                      </NavbarBrand>
                      <Collapse isOpen={this.state.isNavOpen} navbar>
                          <Nav navbar style={{height:"50px"}} >
                              <NavItem >
                                  <NavLink className="nav-link" to="/home">Home</NavLink>
                              </NavItem>
                              <NavItem >
                                  <NavLink className="nav-link" to="/theory">Theory</NavLink>
                              </NavItem>
                              <NavItem >
                                  <NavLink className="nav-link" to="/home">Practice</NavLink>
                              </NavItem>
                              <NavItem >
                                  <NavLink className="nav-link" to="/visualiser">Visualiser</NavLink>
                              </NavItem>
                          </Nav>
                      </Collapse>
                  </div>
              </Navbar>
            </>
        );
    }
}


export default Header;