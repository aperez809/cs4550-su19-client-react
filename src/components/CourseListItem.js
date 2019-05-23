import React from 'react';

const CourseListItem = ({course}) =>
    <div>
        <a href="#" className="list-group-item">
            {course.title}
            <button className="btn btn-danger float-right">
                Delete
            </button>
        </a>
    </div>;

export default CourseListItem;