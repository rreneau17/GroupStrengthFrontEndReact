import React, { Component } from 'react';
import logo from '../images/group_strength_logo.png';
import { connect } from 'react-redux';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return 'checking for authentication...';
            case false:
                return <li className="nav-item ml-4"><a className="nav-link text-light" href="/api/test">Log In</a></li>
            default: 
                return <li className="nav-item ml-4"><a className="nav-link text-light" href="/api/test">Log Out</a></li>;
        }
    }

    render() {
        return (
            <div className="container-fluid sticky-top">
                <div className = "row">
                    <div className="col-xl-2 bg-dark"></div>
                    <div className="col-xl-8 px-0">
                        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <a className="navbar-brand" href="/"><img src={logo} alt="Group Strength"/></a>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item mx-4">
                                        <a className="nav-link text-light" href="#" onclick="scrollGS('#device-app-info');return false;">Watch App</a>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <a className="nav-link text-light" href="#" onclick="scrollGS('#featured-workouts');return false;">Featured Workouts</a>
                                    </li>
                                    <li className="nav-item mx-4">
                                        <a className="nav-link text-light" href="#" onclick="scrollGS('#coming-soon');return false;">Coming Soon</a>
                                    </li>
                                    {this.renderContent()}
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="col-xl-2 bg-dark"></div>
                </div>
            </div>
        );
    }
}

// the following can be destructured
function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Header);