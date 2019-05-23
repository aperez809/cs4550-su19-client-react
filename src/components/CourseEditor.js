import React from 'react';
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";
import Topics from "./Topics";

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        const pathName = window.location.pathname;
        const paths = pathName.split("/");
        const courseId = paths[2];
        this.courses = props.courses;
        this.state = {
            courseId: courseId,
            course: this.courses.find(course => course.id == courseId)
        };
    }

    render() {
        return (
            <div>

                <h2>{this.state.course.title}</h2>
                <div className="row">
                    <div className="col-4 left">
                        <ModuleList modules={this.state.course.modules}/>
                    </div>

                    <div className="col-8 right">
                        <LessonTabs/>
                        <br/>
                        <Topics/>
                    </div>

                </div>
            </div>
        )
    }
}