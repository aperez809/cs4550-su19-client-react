import React from 'react';
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ImageWidget from "./ImageWidget";
import ListWidget from "./ListWidget";
import LinkWidget from "./LinkWidget";
import {connect} from 'react-redux'

let Widget;

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
                        this.props.selectedTopic.widgets.map(
                            ((currWidget) => {
                                    switch (currWidget.type) {
                                        case "HEADING":
                                            Widget = connect()(HeadingWidget);
                                            break;

                                        case "PARAGRAPH":
                                            Widget = connect()(ParagraphWidget);
                                            break;

                                        case "IMAGE":
                                            Widget = connect()(ImageWidget);
                                            break;

                                        case "LIST":
                                            Widget = connect()(ListWidget);
                                            break;

                                        case "LINK":
                                            Widget = connect()(LinkWidget);
                                            break;

                                        default:
                                            Widget = connect()(HeadingWidget);
                                    }
                                    return <Widget
                                                currWidget={Widget}
                                                key={currWidget.id}
                                                title={currWidget.name}
                                                deleteWidget={this.props.deleteWidget}
                                                editWidget={this.props.editWidget}
                                                editing={this.state.editing}
                                                toggleEditing={this.toggleEditing}
                                                updateWidget={this.props.updateWidget}/>
                                }
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
