import { GET_WORKOUTS } from '../actions/types';

export default function (state = {}, action) {
    switch(action.type) {
        case GET_WORKOUTS:
            return action.payload || false
        default:
            return state
    }
}