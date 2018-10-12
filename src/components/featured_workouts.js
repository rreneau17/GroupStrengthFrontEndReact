// contains thumbnails of 3 featured workouts that link to the corresponding workout info

import React from 'react';
import deadlift from '../images/deadlift.jpg';
import runner from '../images/runner.jpg';
import pushUp from '../images/woman_pushup.jpg';

function FeaturedWorkouts() {

    return (
        <section id="featured-workouts">
            <div className="container">
                <h2>Check out these featured workouts on <span className="focal-item">Group Strength</span></h2>  
                <div className="col-sm-4">
                    <div className="thumbnail ">
                        <img src={deadlift} alt="..." />
                        <div className="caption">
                            <h3>Basic Strength Circuit</h3>
                            <p>Type: Strength</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={runner} alt="..." />
                        <div className="caption">
                            <h3>Strength Training for Runners</h3>
                            <p>Type: Strength</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="thumbnail">
                        <img src={pushUp} alt="..." />
                        <div className="caption">
                            <h3>Body Weight HITT Workout</h3>
                            <p>Type: HITT</p>
                        </div>
                    </div>
                </div>  
            </div>     
        </section>
    );
}

export default FeaturedWorkouts;