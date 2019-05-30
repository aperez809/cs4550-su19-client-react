import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

const CourseCard = ({selectCourse, deleteCourse, course}) =>

    <div className="card" styles={{width: '18rem'}}>
        <img className="card-img-top"
             src="https://picsum.photos/300/200"/>
        <div className="card-body">
            <h5 className="card-title">
                {course.title}
            </h5>
            <p className="card-text">{
                `Last Modified:
                ${new Date().getMonth()}
                -
                ${new Date().getDate()}
                -
                ${new Date().getFullYear()}`}</p>
            <Link to={`/course-editor/${course.id}`}
                  onClick={() => selectCourse(course)}
                  className="btn btn-primary">
                More...
            </Link>
            <button className="btn btn-danger"
                    onClick={() => deleteCourse(course.id)}>Delete</button>
        </div>
    </div>;

export default CourseCard;