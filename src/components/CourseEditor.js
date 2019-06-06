import React from 'react';
import ModuleList from "./ModuleList";

import TopicsList from "./TopicsList";
import LessonTabs from './LessonTabs';
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
        if (module.lessons.length > 0) {
            this.setState({
                selectedModule: module,
                selectedLesson: module.lessons[0],
                selectedTopic : module.lessons[0].topics[0]
            });
        }

        else {
            this.setState({
                selectedModule: module,
                selectedLesson: {
                    "title": "",
                    "topics": [{
                        "title": "",
                        "widgets": []
                    }]
                },
                selectedTopic : {
                    "title": "",
                    "widgets": []},
            });
        }


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
    };

    editModule = (module) => {
        module.title =
        this.setState({
            selectedModule: module
        })
    };

    createLesson = event => {
        console.log(event);
        this.state.selectedModule.lessons.push(event.target.value);
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
                        </div>
                    </div>
                </div>
        )
    }
}