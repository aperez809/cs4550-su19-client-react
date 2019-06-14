import { combineReducers } from 'redux';
import CourseListReducer from './CourseListReducer';
import WidgetReducer from './WidgetReducer';

export default combineReducers({
    CourseListReducer,
    WidgetReducer
});
