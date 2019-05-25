import React from 'react';
import LessonTabItem from './LessonTabItem';

const LessonTabs = ({lessons}) =>
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
            {lessons.map(
                currLesson => <LessonTabItem/>
            )}
            </li>
        </ul>
    </div>;

export default LessonTabs;