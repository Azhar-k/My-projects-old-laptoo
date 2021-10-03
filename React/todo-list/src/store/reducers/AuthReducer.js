import * as actionTypes from '../actions/ActionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    userId: null,
    error: null,
    userName : null,
    authenticating: false,
    authRedirectPath: '/signup'
};

const authStart = ( state, action ) => {
    return updateObject( state, { error: null, authenticating: true } );
};

const authSuccess = (state, action) => {
    return updateObject( state, { 
        token: action.idToken,
        userId: action.userId,
        userName : action.userName,
        error: null,
        authenticating: false
     } );
};

const authFail = (state, action) => {
    return updateObject( state, {
        error: action.error,
        authenticating: false
    });
};

const authLogout = (state, action) => {
    return updateObject(state, { token: null, userId: null,userName:null });
};

const setAuthRedirectPath = (state, action) => {
    return updateObject(state, { authRedirectPath: action.path })
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.SET_AUTH_REDIRECT_PATH: return setAuthRedirectPath(state,action);
        default:
            return state;
    }
};

export default reducer;