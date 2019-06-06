import React from 'react';


const LessonTabItem = ({lesson, selectLesson}) =>
<div>
            <li className="nav-item">
                <a className="nav-link"
                   onClick={() => selectLesson(lesson)}
                   href="#">{lesson.title}</a>
            </li>
</div>;

export default LessonTabItem;