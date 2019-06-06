import React from 'react';
import LessonTabItem from './LessonTabItem';

const LessonTabs = ({lessons, selectedModule, titleChanged, createLesson, selectLesson, selectedLesson}) =>
    <div className="container-fluid row">
        <ul className="nav nav-tabs">
            {
                selectedModule.lessons.map(
                    currLesson => <LessonTabItem lesson={currLesson}
                                                 selectLesson={selectLesson}
                                                 selectedLesson={selectedLesson}/>
                )
            }
        </ul>
        <div className="col-6-lg">
            <input className="form-control"
                   onChange={titleChanged}
                   placeholder="New Lesson"/>
        </div>
        <div className="col-6-lg">
            <button
                onClick={createLesson}
                className="ml-1 btn btn-primary">
                Create Lesson
            </button>
        </div>
    </div>;

export default LessonTabs;