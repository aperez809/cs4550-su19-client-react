import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const CourseRow = ({course, selectCourse, deleteCourse}) =>
    <div className="list-group-item">
        <Link onClick={() => selectCourse(course.id)}
              to={`/course-editor/${course.id}`}>
            {course.title}
        </Link>
        <button className="btn btn-danger float-right" onClick={() => deleteCourse(course.id)}>
            Delete
        </button>
    </div>;

export default CourseRow;