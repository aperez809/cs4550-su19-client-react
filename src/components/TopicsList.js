import React from 'react';
import TopicsListItem from './TopicsListItem';

const TopicsList = ({lesson, selectTopic, deleteTopic, selectedTopic, editTopic}) =>

    <div className="container-fluid row">
        <ul className="nav nav-pills">


            {/*Curly brace syntax used to denote where JS code will be inserted into XML*/}
            {/*Using .map() in this instance is the best way to iterate through the rows and
                    dynamically render rows in the XML*/}
            {console.log(lesson)}
            {

                lesson.topics.map(
                    ((currTopic, key) => <TopicsListItem
                            currTopic={currTopic}
                            selectTopic={selectTopic}
                            deleteTopic={deleteTopic}
                            selectedTopic={selectedTopic}
                            editTopic={editTopic}
                            key={key}
                            title={currTopic.title}/>
                    )
                )
            }
            <li className="nav-item">
                <input className="form-control"
                    //onChange={this.titleChanged}
                       placeholder="New Topic"
                    //value={this.state.module.title}
                />
            </li>
            <li className="nav-item">
                <button
                    //onClick={this.createModule}
                    className="btn btn-primary">
                    Create Topic
                </button>
            </li>
        </ul>
    </div>;

export default TopicsList;