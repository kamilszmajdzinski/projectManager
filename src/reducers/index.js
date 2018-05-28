import { combineReducers } from "redux";
import { routerReducer } from 'react-router-redux'
import dataReducer from './data-reducer'

export default combineReducers({
    routing: routerReducer,
    data: dataReducer
})