import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectWorkout } from '../actions/index';
import DashTableExercises from './dashTableExercises';

class DashTable extends Component {


    render() {
        if (this.props.workouts) {
            return (
                <section id="dashboard-table">
                    <div className="container">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Routine</th>
                                    <th>Date</th>
                                    <th>Type</th>
                                </tr>  
                            </thead>
                            <tbody>
                                {this.props.workouts.workoutData.map(workout => {
                                    return [
                                        <tr key={workout.workoutId} onClick={() => this.props.selectWorkout(workout.workoutId)}>
                                            <td>{workout.routineName}</td>
                                            <td>{workout.date}</td>
                                            <td>{workout.routineType}</td>
                                            <td>+</td>
                                        </tr>,
                                        <DashTableExercises
                                            key = {workout.workoutId + workout.routineName}
                                            workoutId = {workout.workoutId} 
                                            actuals = {workout.actuals}
                                            selectedWorkouts = {this.props.selectedWorkouts}
                                        />
                                    ]
                                })}
                            </tbody>
                        </table>
                    </div>
                </section>
            )
        } else {
           return (
               <p>Loading workout data...</p>
           ) 
        }
    }
}

function mapStateToProps(state) {
    if (state.workouts.data) {
        return { 
            workouts: state.workouts.data, 
            selectedWorkouts: state.selectedWorkouts
         }
    } else {
        return { workouts: '', selectedWorkouts: ''}
    }  
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectWorkout: selectWorkout }, dispatch);
}
    
export default connect(mapStateToProps, mapDispatchToProps)(DashTable);