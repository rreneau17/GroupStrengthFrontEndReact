import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
const Landing = () => <h2>Landing</h2>;
const dbView = () => <h2>Dashboard</h2>;
const routinesView = () => <h2>Routines</h2>;

class App extends Component {

    componentDidMount() {
        this.props.fetchUser();
    }

    render() {

        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/dbView" component={dbView} />
                        <Route exact path="/routinesView" component={routinesView} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);