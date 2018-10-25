import { combineReducers } from 'redux';
import authReducer from './authReducer';
import landingReducer from './landingReducer';
import workoutsReducer from './workoutsReducer';
import selectedWorkouts from './selectedWorkout';

export default combineReducers({
    auth: authReducer,
    landing: landingReducer,
    workouts: workoutsReducer,
    selectedWorkouts: selectedWorkouts
});