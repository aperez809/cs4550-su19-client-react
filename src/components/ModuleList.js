import React from 'react';
import ModuleItem from "./ModuleItem";

export default class ModuleList extends React.Component {
    constructor() {
        super();

        //special variable used by React. Name MUST be state if it is included
        this.state = {
            module: {
                title: "New Module",
                id: -1
            },

            modules: [
                {id: 123, title: "HTML"},
                {id: 234, title: "CSS"},
                {id: 345, title: "JavaScript"},
                {id: 456, title: "React.js"},
                {id: 567, title: "Angular.js"},
                {id: 678, title: "React Native"},
                {id: 789, title: "MongoDB"}
            ]
        }
    }

    createModule = () => {

        //Special API used for resetting the state in some way: In this case, prepending an item
        //to the module list.
        this.setState({
            module: {
                id: new Date().getTime()
            },

            //prepends this.state.module. Arguments could be reversed in order to append to end.
            modules: [this.state.module, ...this.state.modules]
        });
    };

    titleChanged = (event) => {
        this.setState({
            module: {
                title: event.target.value
            }
        });
    };

    deleteModule = (id) => {
        //Special API used to set state again. Filter function takes in a predicate (in this case
        //a lambda which keeps all id's that are NOT EQUAL to the id passed in deleteModule
        this.setState({
            modules: this.state.modules.filter(module => module.id !== id)
        });
    };


    render() {
        return (
            <div>
                <h3>Module List</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        <input className="form-control"
                               placeholder={this.state.module.title}
                               />
                        <button
                            onClick={this.createModule}
                            onChange={this.titleChanged}
                            className="btn btn-primary btn-block">
                            Create Module
                        </button>
                    </li>

                    {/*Curly brace syntax used to denote where JS code will be inserted into XML*/}
                    {/*Using .map() in this instance is the best way to iterate through the rows and
                    dynamically render rows in the XML*/}
                    {
                        this.state.modules.map(
                            currModule => <ModuleItem
                                                module={currModule}
                                                deleteModule={this.deleteModule}
                                                key={currModule.id}
                                                title={currModule.title}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}