import React from 'react'
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
            return {
                widgets: action.widgets
            };

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