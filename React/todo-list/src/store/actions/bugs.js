import * as actionTypes from './ActionTypes'
import axios from '../../axios-bugs'


export const setBugs = (bugsList) => {
    return {
        type: actionTypes.FETCH_BUGS,
        bugsList: bugsList,
    };
}

export const setBugsLoading = () =>{
    return {
        type : actionTypes.BUGS_LOADING,
    };
}

export const initBugs = (token) => {
    return dispatch => {
        dispatch(setBugsLoading());
        axios.get('/bugs.json?auth='+token)
            .then(res => {

                const fetchedBugs = [];
                for (let key in res.data) {
                    fetchedBugs.push(res.data[key].bugData);
                }
                dispatch(setBugs(fetchedBugs))
                dispatch(setBugsLoading())
            })
            .catch(err => {
                dispatch(setBugsLoading())
            });
    }
}