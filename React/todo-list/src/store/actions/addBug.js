import * as actionTypes from './ActionTypes'
import axios from '../../axios-bugs'


export const setBugForm = (bugForm) => {
    return {
        type: actionTypes.FORM_CHANGED,
        bugForm : bugForm,
    };
}

export const initApps = (token) => {
    return dispatch => {
        dispatch(setAppsLoading());
        axios.get('/apps.json?auth='+token)
            .then(res => {

                const fetchedApps = [];
                for (let key in res.data) {
                    fetchedApps.push(res.data[key]);
                }

                dispatch(setAppsLoading())
                dispatch(setApps(fetchedApps))
               
            })
            .catch(err => {
                dispatch(setAppsLoading())
            });
    }
}
export const setAppsLoading = () => {
    return {
        type: actionTypes.APPS_LOADING,
    };
}

export const setApps = (appsList) => {
    return {
        type: actionTypes.FETCH_APPS,
        appsList: appsList,
    };
}