import React, { Component } from 'react';
import logo from '../images/group_strength_logo.png';
import { connect } from 'react-redux';
import { Navbar, Nav, NavItem, Grid, Row, Col, Glyphicon } from 'react-bootstrap';

class Header extends Component {
    
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'checking for authentication...';
            case false:
                return <NavItem eventKey={2} href="/api/test">Log In</NavItem>
            default: 
                return <NavItem eventKey={2} href="/api/test">Log Out</NavItem>
        }
    }

    render() {
        return (
            <Navbar 
                inverse 
                collapseOnSelect 
                fluid 
                fixedTop >
                <Col md={2}></Col>
                <Col md={8}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <img src={logo} />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                    <NavItem eventKey={1} href="#">
                        Link Right
                    </NavItem>
                    {this.renderContent()}
                    </Nav>
                </Navbar.Collapse>
                </Col>
                <Col md={2}></Col>
            </Navbar>       
        )
    }
}

// the following can be destructured
function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);