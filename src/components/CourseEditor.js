import React from 'react';
import ModuleList from "./ModuleList";
import LessonTabs from "./LessonTabs";

export default class CourseEditor extends React.Component {
    render() {
        return (
            <div>

                <h2>CourseEditor</h2>
                <div className="row">
                    <div className="col-4 left">
                        <ModuleList/>
                    </div>

                    <div className="col-8 right">
                        <LessonTabs/>
                    </div>

                </div>
            </div>
        )
    }
}