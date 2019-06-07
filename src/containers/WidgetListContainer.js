import React from 'react'
import WidgetListComponent from '../components/WidgetListComponent'
import {connect} from 'react-redux'
import service from '../services/WidgetService';
const widgetService = service.getInstance();

const stateToPropertyMapper = state => ({
    widgets: state.widgets
});

const dispathToPropertyMapper = dispatch => ({
    //TODO: ADD DIFFERENT ACTION TYPES AS FUNCTIONS
    updateWidget: newWidget => {
        widgetService
            .updateWidget(newWidget)
            .then(widgets =>
                dispatch({
                    type: "UPDATE_WIDGET",
                    widgets: widgets
                }));
    },

    createWidget: () => {
        widgetService
            .createWidget({
                id: new Date().getTime(),
                name: "New Widget",
                type: "HEADING",
            })
            .then(widgets =>
                dispatch({
                    type: "CREATE_WIDGET",
                    widgets: widgets
                }))
    },

    findAllWidgets: () =>
        widgetService
            .findAllWidgets()
            .then(widgets =>
                dispatch({
                    type: "FIND_ALL_WIDGETS",
                    widgets: widgets
                })),
    deleteWidget: widgetId => {
        widgetService
            .deleteWidget(widgetId)
            .then(widgets =>
                dispatch({
                    type: 'DELETE_WIDGET',
                    widgets: widgets
                }))
    }
});

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispathToPropertyMapper)(WidgetListComponent);

export default WidgetListContainer;

