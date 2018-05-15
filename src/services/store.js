import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import pollReducer from '../reducers/pollReducer'
import profileReducer from '../reducers/profileReducer'
import pollElementReducer from '../reducers/pollElementReducer'
import loginReducer from '../reducers/loginReducer'

/*Combines all the given reducers */
const reducer = combineReducers({
    polls: pollReducer,
    profile: profileReducer,
    pollElement: pollElementReducer,
    login: loginReducer
})

/*Creates the store for reducers */
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)



export default store    