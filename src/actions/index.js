import axios from 'axios';
import { FETCH_USER } from './types';
import { GET_LANDING_DATA } from './types';

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

