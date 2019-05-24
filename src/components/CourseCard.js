import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const CourseCard = ({selectCourse, course}) =>

    <div className="card" styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">
                {course.title}
            </h5>
            <p className="card-text">Card text.</p>
            <Link to={`/course-editor/${course.id}`}
                  onClick={() => selectCourse(course)}
                  className="btn btn-primary">
                More...
            </Link>
        </div>
    </div>;

export default CourseCard;