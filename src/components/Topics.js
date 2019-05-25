import React from 'react';

const Topics = ({topic}) =>
    <div>
        <li className="nav-item">
            <a className="nav-link" href="#">{topic.title}</a>
        </li>
    </div>;

export default Topics;