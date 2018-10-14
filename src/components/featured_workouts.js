// contains thumbnails of 3 featured workouts that link to the corresponding workout info

import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeaturedThumbnails from './featured_thumbnails';

class FeaturedWorkouts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRoutine: ''
        }
        this.chooseRoutine = this.chooseRoutine.bind(this);
    }

    // for practice.  this function will not exist in production
    chooseRoutine(selectedRtn) {
        this.setState({ selectedRoutine: selectedRtn });
    }

    render() {
        if(this.props.landing) {
            return (
                <section id="featured-workouts">
                    <div className="container">
                        <h2>Check out these featured workouts on <span className="focal-item">Group Strength</span></h2>  
                        {this.props.landing.featured.map(workout => {
                            return (
                                <div key={workout.routineName} className="col-sm-4">
                                    <FeaturedThumbnails 
                                        routine={workout.routineName} 
                                        pic={workout.picName} 
                                        type={workout.routineType}
                                        onRtnSelect={this.chooseRoutine}
                                        />
                                </div>
                            )
                        })}
                        <p>Routine Selected:  "{this.state.selectedRoutine}"  For practice only.  Will remove this line.</p>
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
    return (state.landing.data) ? { landing: state.landing.data } : { landing: ''};
}

export default connect(mapStateToProps)(FeaturedWorkouts);