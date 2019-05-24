import React from 'react';
import CourseCard from "./CourseCard";

const CourseGrid = ({courses, selectCourse}) =>
    <div>
        <h1>Course Grid</h1>
        <div className="row">
            {
                courses.map((course, key) =>
                    <div class="col-lg-2 col-md-4 col-sm-12">
                        <CourseCard selectCourse={selectCourse}
                                    course={course}
                                    key={key}
                                    title={course.title}/>
                </div>)
            }
        </div>
    </div>;

export default CourseGrid;