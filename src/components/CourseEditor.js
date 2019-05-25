import React from 'react';
import ModuleList from "./ModuleList";

import Topics from "./Topics";
import LessonTabItem from './LessonTabItem';

export default class CourseEditor extends React.Component {
    constructor(props) {
        super(props);
        const pathName = window.location.pathname;
        const paths = pathName.split("/");
        const courseId = paths[2];
        this.courses = props.courses;
        this.course = this.courses.find(course => course.id == courseId);
        this.state = {
            courseId: courseId,
            course: this.course,
            selectedModule: this.course.modules[0],
            selectedLesson: this.course.modules[0].lessons[0],
            selectedTopic : this.course.modules[0].lessons[0].topics[0]
        };
    }

    selectModule = module => {
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0],
            selectedTopic : module.lessons[0].topics[0]
        });

    };

    createModule = () => {

        //Special API used for resetting the state in some way: In this case, prepending an item
        //to the module list.
        this.setState({
            module: {
                id: new Date().getTime()
            },

            //prepends this.state.module. Arguments could be reversed in order to append to end.
            modules: [this.state.module, ...this.state.modules]
        });
    };

    render() {
        return (
            <div>

                <h2>{this.course.title}</h2>
                <div className="row">
                    <div className="col-4 left">
                        <ModuleList deleteModule={this.deleteModule}
                                    createModule={this.createModule}
                                    selectModule={this.selectModule}
                                    modules={this.course.modules}/>
                    </div>

                    <div className="col-8 right">
                        <div className="container-fluid row">
                            <ul className="nav nav-tabs">
                                {
                                    this.state.selectedModule.lessons.map(
                                        currLesson => <LessonTabItem lesson={currLesson}/>
                                    )
                                }
                            </ul>
                        </div>
                            <ul className="nav nav-pills">
                                <Topics topic={this.state.selectedTopic}/>
                            </ul>
                        </div>
                    </div>
                </div>
        )
    }
}