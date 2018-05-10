import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import pollReducer from './reducers/pollReducer'
import profileReducer from './reducers/profileReducer'
import pollElementReducer from './reducers/pollElementReducer'


const reducer = combineReducers({
    polls: pollReducer,
    profile: profileReducer,
    pollElement: pollElementReducer
})

/*Create own file for store */
const store = createStore(
    reducer,
    applyMiddleware(thunk))



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

