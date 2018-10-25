// header with navigation bar

import React, { Component } from 'react';
import logo from '../images/group_strength_logo.png';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
// import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
    
    // renders link item depending on user log in status
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'checking for authentication...';
            case false:
                return (
                    <LinkContainer to="/dashView" activeClassName="">
                        <NavItem eventKey={4}>Log In</NavItem>
                    </LinkContainer>
                )
            default: 
                return (
                    <LinkContainer to="/dashView" activeClassName="">
                        <NavItem eventKey={4} href="/api/test">Log Out</NavItem>
                    </LinkContainer>
                )
        }
    }

    render() {
        return (

            <Navbar 
                collapseOnSelect
                fixedTop
                fluid>
                
                <div className="container">
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/"><img src={logo} /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <LinkContainer to="/" activeClassName="">
                        <NavItem eventKey={1} href="#device-app-info">
                            Watch App
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/" activeClassName="">
                        <NavItem eventKey={2} href="#featured-workouts">
                            Featured Workouts
                        </NavItem>
                    </LinkContainer>
                    <LinkContainer to="/dashView" activeClassName="">
                        <NavItem eventKey={3}>
                            Dashboard
                        </NavItem>
                    </LinkContainer>
                    {this.renderContent()}
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar> 

        )
    }
}

// the following can be destructured
function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);