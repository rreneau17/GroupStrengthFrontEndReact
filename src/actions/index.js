import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => {
    return function(dispatch) {
        axios
            .get('/api/current_user')
            // .get('/api/test',{withCredentials: true})
            .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
    }
};