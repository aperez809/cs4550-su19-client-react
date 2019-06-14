import React from 'react';
import CourseService from '../services/CourseService';

const service = CourseService.getInstance();
let courses = service.findAllCourses();

const CourseReducer = (state = {courses: []}, action) => {
    switch (action.type) {
        case "CREATE_COURSE":
            return {
                courses: action.courses
            };


        case "DELETE_COURSE":
            return {
                courses: action.courses
            };

        case "UPDATE_COURSE":
            return {
                courses: action.courses
            };

        case "FIND_COURSE":
            return state.courses.find( course => course.id == action.id);

        case "FIND_ALL_COURSES":
            return {
                courses: action.courses
            };

        default:
            return state;
    }
};

export default CourseReducer;