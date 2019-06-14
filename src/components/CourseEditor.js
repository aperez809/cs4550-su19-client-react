import React from 'react';
import ModuleList from "./ModuleList";

import TopicsList from "./TopicsList";
import LessonTabs from './LessonTabs';
import WidgetListContainer from '../containers/WidgetListContainer';

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

    selectModule = (module) => {
        this.setState({
            selectedModule: module,
            selectedLesson: module.lessons[0],
            selectedTopic : module.lessons[0].topics[0]
        });
    };

    selectLesson = lesson => {
        this.setState({
            selectedLesson: this.state.selectedModule.lessons.find(l => l.title == lesson.title)
        });
        console.log("selectLesson");
    };

    selectTopic = topic => {
        this.setState({
            selectedTopic: this.state.selectedLesson.topics.find(t => t.title == topic.title)
        });
        console.log("selectTopic");
    };

    createModule = () => {
        //Special API used for resetting the state in some way: In this case, prepending an item
        //to the module list.
        this.setState({
            module: {
                id: new Date().getTime()
            },

            //prepends this.state.module. Arguments could be reversed in order to append to end.
            modules: [...this.state.modules, this.state.module]
        });
        console.log(this.state.modules)
    };

    editModule = (module) => {
        this.setState({
            selectedModule: module
        })
    };

    createLesson = event => {
        const newListOfLesson = this.state.selectedModule.lessons;
        newListOfLesson.push(event.target.value);
        this.setState({
            selectedModule: newListOfLesson
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
                                    editModule={this.editModule}
                                    selectedModule={this.state.selectedModule}
                                    modules={this.course.modules}/>
                    </div>

                    <div className="col-8 right">
                        <LessonTabs createLesson={this.createLesson}
                                    selectedModule={this.state.selectedModule}
                                    titleChanged={this.titleChanged}
                                    selectLesson={this.selectLesson}
                                    selectedLesson={this.state.selectedLesson}
                                    />

                        <div className="mt-2">
                            <TopicsList topics={this.state.selectedLesson.topics}
                                        selectedTopic={this.state.selectedTopic}
                                        selectTopic={this.selectTopic}
                                        editTopic={this.editTopic}
                                        deleteTopic={this.deleteTopic}/>

                        </div>
                        <WidgetListContainer widgets={this.state.selectedTopic.widgets}
                                             selectedTopic={this.state.selectedTopic}/>
                    </div>
                </div>
            </div>
        )
    }
}