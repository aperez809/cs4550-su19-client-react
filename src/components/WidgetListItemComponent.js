import React from 'react';
import WidgetListComponent from './WidgetListComponent'

const WidgetListItemComponent = ({currWidget}) =>
    <li className="nav-item"
        //onClick={() => selectTopic(currTopic)}>
        >
        <a className="nav-link"//className={currWidget.title == selectedWidget.title ? "nav-link active": "nav-link"}
           href="#">
            {currWidget.title}
        </a>
    </li>;

export default WidgetListItemComponent;