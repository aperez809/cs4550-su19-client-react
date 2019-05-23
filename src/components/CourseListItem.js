import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CourseService from '../services/CourseService';

const CourseListItem = ({course, selectedCourse}) =>
    <div className="list-group-item">
        <Link to={`/course-editor/${course.id}`}>
            {course.title}
        </Link>
        <button onClick={() => selectedCourse(course)}
                className="btn btn-danger float-right">
            Delete
        </button>
    </div>;

export default CourseListItem;