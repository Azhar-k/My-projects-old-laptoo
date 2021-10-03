import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import  BugsReducer from './store/reducers/BugsReducer.js'
import  AddBugReducer from './store/reducers/AddBugReducer.js'
import  AuthReducer from './store/reducers/AuthReducer.js'
import {Provider} from 'react-redux';
import thunk from 'redux-thunk'



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  apps : AddBugReducer,
  bugs : BugsReducer,
  auth: AuthReducer,
})
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Provider store={store}> <App /></Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
