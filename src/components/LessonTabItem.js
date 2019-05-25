import React from 'react';


const LessonTabItem = ({lesson}) =>
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link" href="#">{lesson.title}</a>
            </li>
        </ul>
    </div>;

export default LessonTabItem;