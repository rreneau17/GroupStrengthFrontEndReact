// contains thumbnails of 3 featured workouts that link to the corresponding workout info

import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeaturedThumbnails from './featured_thumbnails';
import deadlift from '../images/deadlift.jpg';
import runner from '../images/runner.jpg';
import pushUp from '../images/woman_pushup.jpg';

class FeaturedWorkouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedWorkout: ''
        }
        
    }


    renderThumbnails(workout) {
        return (
            <div key={workout.routineName} className="col-sm-4">
                <FeaturedThumbnails 
                    routine={workout.routineName} 
                    pic={workout.picName} 
                    type={workout.routineType}
                    />
            </div>
        )
    }

    render() {
        if(this.props.landing) {
            return (
                <section id="featured-workouts">
                    <div className="container">
                        <h2>Check out these featured workouts on <span className="focal-item">Group Strength</span></h2>  
                        {this.props.landing.map(item => {
                            if(item.featured) {
                                return item.featured.map(this.renderThumbnails);
                            }
                        })}
                    </div>     
                </section>
            );
        } else {
            return (
                <p>Loading workouts...</p>
            )
        }
    }
}

function mapStateToProps(state) {
    return { landing: state.landing.data }
}

export default connect(mapStateToProps)(FeaturedWorkouts);