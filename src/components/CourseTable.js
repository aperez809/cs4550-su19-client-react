import React from 'react';
import CourseRow from './CourseRow';



//const CourseTable = ({courses, selectCourse, deleteCourse}) =>
class CourseTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Course List</h1>
                <div className="list-group">
                    {
                        this.props.courses.map((course) =>
                            <CourseRow deleteCourse={this.props.deleteCourse}
                                       selectCourse={this.props.selectCourse}
                                       course={course}
                                       key={course.id}/>
                        )
                    }

                </div>
            </div>
        );
    }
}

export default CourseTable;