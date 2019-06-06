import React from 'react';

const TopicsListItem = ({currTopic, selectTopic, selectedTopic}) =>
    <li className="nav-item"
        onClick={() => selectTopic(currTopic)}>
        <a className={currTopic.title == selectedTopic.title ? "nav-link active": "nav-link"}
           href="#">
            {currTopic.title}
        </a>
    </li>;

export default TopicsListItem;