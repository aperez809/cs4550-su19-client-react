import React from 'react';

class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.props.findAllWidgets()
        this.state = {
            editing: true
        }
    }

    toggleEditing = () => {
        this.setState({
            editing: !this.state.editing
        });
    }

}