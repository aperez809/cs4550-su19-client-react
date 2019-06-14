import React from 'react'
import CourseTable from '../components/CourseTable'
import {connect} from 'react-redux'
import service from '../services/CourseService';
const courseService = service.getInstance();



const stateToPropertyMapper = state => ({
    courses: state.courses
});

const dispatchToPropertyMapper = dispatch => ({
    updateCourse: newCourse => {
        courseService
            .updateCourse(newCourse)
            .then(courses =>
                dispatch({
                    type: "UPDATE_COURSE",
                    courses: courses
                }));
    },

    createCourse: () => {
        courseService
            .createCourse({
                //TODO: CHANGE THIS
                title: "New Course",
                author: "",
            })
            .then(courses =>
                dispatch({
                    type: "CREATE_COURSE",
                    courses: courses
                }))
    },

    findAllCourses: () =>
        courseService
            .findAllCourses()
            .then(courses =>
                dispatch({
                    type: "FIND_ALL_COURSES",
                    courses: courses
                })),

    deleteCourse: courseId => {
        courseService
            .deleteCourse(courseId)
            .then(courses =>
                dispatch({
                    type: 'DELETE_COURSE',
                    courses: courses
                }))
    }
});

const CourseListContainer = connect(
    stateToPropertyMapper,
    dispatchToPropertyMapper)(CourseTable);

export default CourseListContainer;

