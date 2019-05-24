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
            course: this.courses.find(course => course.id === courseId),
            selectedModule: this.props.selectedCourse.modules[0]

        };
    }

    selectModule = module =>
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0],
            selectedTopic : module.lessons[0].topics[0]
        });

    render() {
        return (
            <div>

                <h2>{this.state.course.title}</h2>
                <div className="row">
                    <div className="col-4 left">
                        <ModuleList selectModule={this.selectModule}
                                    modules={this.props.selectedCourse.modules}/>
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