import React from 'react'
import WidgetListComponent from '../components/WidgetListComponent'
import {connect} from 'react-redux'

const stateToPropertyMapper = state => ({
    widgets: state.widgets
});

const dispathToPropertyMapper = dispatch => ({
    paramAchanged: (a) => dispatch({type: 'A_CHANGED', newA: a}),
    paramBchanged: (b) => dispatch({type: 'B_CHANGED', newB: b})
});

const WidgetListContainer = connect(
    stateToPropertyMapper,
    dispathToPropertyMapper)(WidgetListComponent);

export default WidgetListContainer;

