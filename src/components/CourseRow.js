import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const CourseRow = ({course, selectCourse}) =>
    <div className="list-group-item">
        <Link onClick={() => selectCourse(course)}
              to={`/course-editor/${course.id}`}>
            {course.title}
        </Link>
        <button className="btn btn-danger float-right">
            Delete
        </button>
    </div>;

export default CourseRow;