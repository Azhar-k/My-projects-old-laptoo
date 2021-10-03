import * as actionTypes from '../actions/ActionTypes.js'

const initialState = {
    appsList: [],
    appsLoading: false,
    bugForm: {
        BugDescription: '',
        AppName: '',
        BugUrl: '',
        bugStatus:'pending',
        UrgentFlag: false,
    }
}

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.FETCH_APPS) {
        const updatedBugForm = {
            BugDescription: '',
            AppName: action.appsList[0].name,
            BugUrl: '',
            bugStatus:'pending',
            UrgentFlag:false
        }
        return {
            ...state,
            appsList: action.appsList,
            bugForm: updatedBugForm,
        }
    }
    if (action.type === actionTypes.APPS_LOADING) {

        const updatedAppsLoading = !state.appsLoading;
        return {
            ...state,
            appsLoading: updatedAppsLoading,
        }
    }
    if (action.type === actionTypes.FORM_CHANGED) {
       
        return {
            ...state,
            bugForm: action.bugForm,
        }
    }

    return state;
}

export default reducer;