import { combineReducers } from 'redux';

import textTransform, { notifications } from './textTransform'


export default combineReducers({
    textTransform,
    notifications
})