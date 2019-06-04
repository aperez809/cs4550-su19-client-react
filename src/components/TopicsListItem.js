import React from 'react';

const TopicsListItem = ({currTopic, selectTopic}) =>
    <li className="nav-item"
        onClick={selectTopic}><a className="nav-link">{currTopic.title}</a>
    </li>;

export default TopicsListItem;