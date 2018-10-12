// landing page for Group Strength
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLandingData } from '../actions'
import CarouselGS from './carousel';
import DeviceAppInfo from './device_app_info';
import FeaturedWorkouts from './featured_workouts';
import ComingSoon from './coming_soon';

class Landing extends Component {

    componentDidMount() {
        this.props.getLandingData();
    }

    render () {
        return (    
            <div>
                <CarouselGS />
                <DeviceAppInfo />
                <FeaturedWorkouts />
                <ComingSoon />

            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
   return bindActionCreators({ getLandingData }, dispatch);
}

export default connect(null, mapDispatchToProps)(Landing);