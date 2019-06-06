import React from 'react'
import {createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import WidgetService from '../services/WidgetService'

const service = WidgetService.getInstance();
let widgets = service.findAllWidgets();

const WidgetReducer = (state = {widgets: widgets}, action) => {
    switch (action.type) {
 /*       case "CREATE_WIDGET":
            //TODO: find way to get these args
            return service.createWidget(widget);

        case "DELETE_WIDGET":
            //TODO: find way to get these args
            return service.deleteWidget(id);

        case "UPDATE_WIDGET":
            //TODO: find way to get these args
            return service.updateWidget(id, widget);

        case "FIND_WIDGET":
            return service.findWidgetById(id);
*/
        case "FIND_ALL_WIDGETS":
            return widgets;

        default:
            return state;
    }
};

export default WidgetReducer;