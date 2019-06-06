import React from 'react';
import WidgetListComponent from './WidgetListComponent'

const WidgetListItemComponent = ({currWidget}) =>
    <li className="list-group-item"
        //onClick={() => selectTopic(currTopic)}>
        >
        <a className="nav-link"//className={currWidget.title == selectedWidget.title ? "nav-link active": "nav-link"}
           href="#">
            {currWidget.type}
        </a>
    </li>;

export default WidgetListItemComponent;