import { SELECTED_WORKOUT } from '../actions/types';

export default function( state = {}, action) {
    switch(action.type) {
        case SELECTED_WORKOUT:
            return (!state[action.payload]) ? {...state, [action.payload]: true } : {...state, [action.payload]: false }
            
        default:
            return state
    }
}


