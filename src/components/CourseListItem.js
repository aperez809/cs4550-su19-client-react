import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const CourseListItem = ({course}) =>
    <div>
        <Link to={`/course-editor/${course.id}`} className="list-group-item">
            {course.title}
            <button className="btn btn-danger float-right">
                Delete
            </button>
        </Link>
    </div>;

export default CourseListItem;