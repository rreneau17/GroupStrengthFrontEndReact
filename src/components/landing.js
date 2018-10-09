import React from 'react';
import CarouselGS from './carousel';
import DeviceAppInfo from './device_app_info';
import FeaturedWorkouts from './featured_workouts';
import ComingSoon from './coming_soon';

function Landing() {
    return (
        <div>
            <CarouselGS />
            <DeviceAppInfo />
            <FeaturedWorkouts />
            <ComingSoon />

        </div>
    )
}

export default Landing;