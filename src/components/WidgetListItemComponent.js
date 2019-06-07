import React from 'react';
import WidgetListComponent from './WidgetListComponent'

//const WidgetListItemComponent = ({currWidget, deleteWidget, editWidget, editing, toggleEditing}) =>
class WidgetListItemComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.currWidget)
    }
    render() {
        return (
            <li className="list-group-item"
                key={this.props.currWidget.id}
                >
                <a className="nav-link"
                   href="#">
                    {this.props.currWidget.type}
                </a>
                {this.props.editing &&
                <span>
        <button onClick={() => this.props.deleteWidget(this.props.currWidget.id)}>
            Delete
        </button>
            <select value={this.props.currWidget.type}>
                <option value="HEADING">Heading</option>
                <option value="PARAGRAPH">Paragraph</option>
                <option value="IMAGE">Image</option>
            </select>
        </span>
                }
                {!this.props.editing &&
                <button onClick={this.props.toggleEditing}>
                    Edit
                </button>
                }
                {this.props.editing &&
                <button onClick={this.props.toggleEditing}>
                    Done
                </button>
                }

            </li>)
    }
}

export default WidgetListItemComponent;