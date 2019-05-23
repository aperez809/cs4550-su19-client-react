import React from 'react';
import CourseCard from "./CourseCard";

const CourseGrid = ({courses, selectedCourse}) =>
    <div>
        <h1>Course Grid</h1>
        <div className="card-group">
            {
                courses.map((course) =>
                    <CourseCard selectedCourse={selectedCourse}
                                course={course}
                                key={course.id}
                                title={course.title}/>)
            }
        </div>
    </div>;

export default CourseGrid;