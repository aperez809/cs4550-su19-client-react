import React from 'react';
import CourseCard from "./CourseCard";

const CourseGrid = ({courses, selectCourse}) =>
    <div>
        <h1>Course Grid</h1>
        <div className="card-deck">
            {
                courses.map((course, key) =>
                    <CourseCard selectCourse={selectCourse}
                                course={course}
                                key={key}
                                title={course.title}/>)
            }
        </div>
    </div>;

export default CourseGrid;