import React from 'react';
import WidgetListItemComponent from './WidgetListItemComponent';

//const WidgetListComponent = ({widgets}) =>
class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props.findAllWidgets();
    }
    state = {
        editing: false
    };

    toggleEditing = () =>
        this.setState({
            editing: !this.state.editing
        });

    render() {
        return (
            <div aria-orientation="vertical">
                <ul className="list-group">
                    {/*Curly brace syntax used to denote where JS code will be inserted into XML*/}
                    {/*Using .map() in this instance is the best way to iterate through the rows and
                            dynamically render rows in the XML*/}
                    {
                        this.props.widgets.map(
                            ((currWidget, key) => <WidgetListItemComponent
                                    currWidget={currWidget}
                                    //selectTopic={selectTopic}
                                    //deleteTopic={deleteTopic}
                                    //selectedTopic={selectedTopic}
                                    //editTopic={editTopic}
                                    key={key}
                                    title={currWidget.title}
                                    deleteWidget={this.props.deleteWidget}
                                    editWidget={this.props.editWidget}
                                    editing={this.state.editing}
                                    toggleEditing={this.toggleEditing}
                                    updateWidget={this.props.updateWidget}/>
                            )
                        )

                    }
                </ul>
                <button onClick={this.props.createWidget}>Create</button>
            </div>
        );
    }
}

export default WidgetListComponent;
