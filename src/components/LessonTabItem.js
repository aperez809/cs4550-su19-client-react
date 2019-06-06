import React from 'react';


const LessonTabItem = ({lesson, selectedLesson, selectLesson}) =>
<div>
            <li className={lesson.id == selectedLesson.id ? "nav-item active": "nav-item"}>
                <a className="nav-link"
                   onClick={() => selectLesson(lesson)}
                   href="#">
                    {lesson.title}
                </a>
            </li>
</div>;

export default LessonTabItem;