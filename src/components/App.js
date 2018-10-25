import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
// import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { fetchUser } from '../actions';
import Header from './header';
import Landing from './landing';
import Footer from './footer';
import DashView from './dashView'; 
// const Landing = () => <h2>Landing</h2>;
// const dashView = () => <h2>Dashboard</h2>;
const routinesView = () => <h2>Routines</h2>;

class App extends Component {

    // gets the user authentication status
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
                        <Route exact path="/dashView" component={DashView} />
                        <Route exact path="/routinesView" component={routinesView} />
                        <Footer />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);

// export default connect(null, actions)(App);