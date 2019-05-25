import React from 'react';


const LessonTabItem = ({lesson}) =>

            <li className="nav-item">
                <a className="nav-link" href="#">{lesson.title}</a>
            </li>;

export default LessonTabItem;