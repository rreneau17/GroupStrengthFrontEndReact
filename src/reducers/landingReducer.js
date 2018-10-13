import { GET_LANDING_DATA } from '../actions/types';

export default function (state={}, action) {
    switch (action.type) {
        case GET_LANDING_DATA:
            return action.payload || false
        default:
            return state
    }
}