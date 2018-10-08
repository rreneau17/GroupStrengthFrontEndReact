import React from 'react';
import CarouselGS from './carousel';
import DeviceAppInfo from './device_app_info';
import FeaturedWorkouts from './featured_workouts';

function Landing() {
    return (
        <div>
            <CarouselGS />
            <DeviceAppInfo />
            <FeaturedWorkouts />

        </div>
    )
}

export default Landing;