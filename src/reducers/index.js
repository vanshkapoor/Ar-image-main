import { combineReducers } from 'redux';
import authReducer from './authReducer';
import registerUserReducer from './registerUserReducer';
import QnaReducer from './QnaReducer';
import eventReducer from './eventReducer';
import achievementReducer from './achievementReducer';


export default combineReducers({
    auth:authReducer,
    registerUsers:registerUserReducer,
    questions:QnaReducer,
    events:eventReducer,
    achievement:achievementReducer
});


