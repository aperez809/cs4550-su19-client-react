import { combineReducers } from 'redux';
import CourseReducer from './CourseListReducer';
import WidgetReducer from './WidgetReducer';



export default combineReducers({
    CourseReducer,
    WidgetReducer
});

