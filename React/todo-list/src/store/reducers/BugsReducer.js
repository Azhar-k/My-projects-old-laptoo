import * as actionTypes from '../actions/ActionTypes.js'

const initialState = {
    bugsList: [],
    bugsLoading: false,
  
}

const reducer = (state = initialState, action) => {

    if (action.type === actionTypes.FETCH_BUGS) {
        return {
            ...state,
            bugsList: action.bugsList,
        }
    }
    if (action.type === actionTypes.BUGS_LOADING) {

        const updatedBugsLoading = !state.bugsLoading;
        return {
            ...state,
            bugsLoading: updatedBugsLoading,
        }
    }

    return state;
}

export default reducer;