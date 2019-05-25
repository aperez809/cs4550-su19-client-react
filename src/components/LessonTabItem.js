import React from 'react';


const LessonTabItem = ({lesson}) =>
<div>
            <li className="nav-item">
                <a className="nav-link" href="#">{lesson.title}</a>
            </li>
</div>;

export default LessonTabItem;