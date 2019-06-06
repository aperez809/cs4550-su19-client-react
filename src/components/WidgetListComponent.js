import React from 'react';
import WidgetListItemComponent from './WidgetListItemComponent';

const WidgetListComponent = ({widgets}) =>
    <div aria-orientation="vertical">
    <ul className="list-group">
        {/*Curly brace syntax used to denote where JS code will be inserted into XML*/}
        {/*Using .map() in this instance is the best way to iterate through the rows and
                    dynamically render rows in the XML*/}
        {
            widgets.map(
                ((currWidget, key) => <WidgetListItemComponent
                        currWidget={currWidget}
                        //selectTopic={selectTopic}
                        //deleteTopic={deleteTopic}
                        //selectedTopic={selectedTopic}
                        //editTopic={editTopic}
                        key={key}
                        title={currWidget.title}/>
                )
            )
        }
    </ul>
    </div>;

export default WidgetListComponent;
