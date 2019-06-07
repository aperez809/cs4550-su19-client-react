import React from 'react'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import WidgetService from '../services/WidgetService'

const service = WidgetService.getInstance();
let widgets = service.findAllWidgets();

const WidgetReducer = (state = {widgets: []}, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                widgets: action.widgets
            };


        case "DELETE_WIDGET":
            return {
                widgets: action.widgets
            };

        case "UPDATE_WIDGET":
            //TODO: find way to get these args
            return;

        case "FIND_WIDGET":
            return state.widgets.find( widget => widget.id == action.id);

        case "FIND_ALL_WIDGETS":
            return {
                widgets: action.widgets
            };

        default:
            return state;
    }
};

export default WidgetReducer;