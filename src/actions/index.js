import axios from 'axios';
import { FETCH_USER } from './types';
import { GET_LANDING_DATA } from './types';
import { GET_WORKOUTS } from './types';
import { SELECTED_WORKOUT } from './types';

export function fetchUser() {
    const userStatus = axios.get('/api/current_user');
    
    return {
        type: FETCH_USER,
        payload: userStatus 
    }
}

export function getLandingData() {
    const landingData = axios.get('/api/test');

    return {
        type: GET_LANDING_DATA,
        payload: landingData
    }
}

export function getWorkouts() {
    const workouts = axios.get('/api/dbView/5');
    return {
        type: GET_WORKOUTS,
        payload: workouts
    }
}

export function selectWorkout(selectedWorkout) {
    return {
        type: SELECTED_WORKOUT,
        payload: selectedWorkout
    }
}

