import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getWorkouts } from '../actions/index';
import DashTable from './dashTable';

class DashView extends Component {

    componentDidMount() {
        this.props.getWorkouts();
    }

    render() {
        
        return (
            <DashTable />
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getWorkouts }, dispatch)
}

export default connect(null, mapDispatchToProps)(DashView);

