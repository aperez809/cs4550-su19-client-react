import React from 'react';
import CourseListItem from './CourseRow';

const CourseList = ({courses, selectCourse, deleteCourse}) =>
    <div>
        <h1>Course List</h1>
            <div className="list-group">
                {
                    courses.map((course) =>
                        <CourseListItem deleteCourse={deleteCourse}
                                        selectCourse={selectCourse}
                                        course={course}
                                        key={course.id}/>
                    )
                }

            </div>
    </div>;

export default CourseList;