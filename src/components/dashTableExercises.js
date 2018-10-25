import React from 'react';

function DashTableExercises(props) {
    
    let exClassName;
    (props.selectedWorkouts[props.workoutId]) ? exClassName = "exercise-list-show" : exClassName = "exercise-list";

    return props.actuals.map(actual => {
        
        return (
            <tr key={actual.exercise.exerciseName + actual.setNum} className={exClassName}>
                <td>{actual.exercise.exerciseName}</td>
                <td>{actual.setNum}</td>
                <td>{actual.actualReps}</td>
                <td>{actual.actualWgt}</td>
            </tr>
        )
    })
}

export default DashTableExercises;