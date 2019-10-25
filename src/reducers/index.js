import {combineReducers} from 'redux';
import checkboxReducer from './checkboxReducer';
import imagesReducer from './imagesReducer';

export default combineReducers({
    checkbox: checkboxReducer,
    images: imagesReducer
});