import React from 'react';
import CourseListItem from './CourseListItem';

const CourseList = ({courses, selectedCourse}) =>
    <div>
        <h1>Course List</h1>
            <div className="list-group">
                {
                    courses.map((course, key) =>
                        <CourseListItem selectedCourse={selectedCourse}
                                        course={course}
                                        key={key}/>
                    )
                }

            </div>
    </div>;

export default CourseList;