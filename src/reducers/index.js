import { combineReducers } from "redux";

import auth from './auth'
import taskList from './taskList'


export default combineReducers({
    auth,
    taskList
})