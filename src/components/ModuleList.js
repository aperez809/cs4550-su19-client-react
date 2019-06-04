import React from 'react';
import ModuleItem from "./ModuleItem";

export default class ModuleList extends React.Component {
    constructor(props) {
        super(props);

        //special variable used by React. Name MUST be state if it is included
        this.state = {
            module: {
                id: -1,
                title: "",
                lessons: [
                    {
                        "title": "fgjkjklflf",
                        "topics": [
                            {
                                "title": "fdsjaigr",
                                "widgets": [
                                    {
                                        "type": "HEADING",
                                        "size": 1,
                                        "text": "eihuiwfrw"
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            modules: this.props.modules
        }
    }

    createModule = () => {
        //Special API used for resetting the state in some way: In this case, prepending an item
        //to the module list.
        this.setState({
            module: {
                id: new Date().getTime(),
            },

            //prepends this.state.module. Arguments could be reversed in order to append to end.
            modules: [...this.state.modules, this.state.module]
        });
        console.log(this.state);
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
                               onChange={this.titleChanged}
                               placeholder="New Module"
                               value={this.state.module.title}
                               />
                        <button
                            onClick={this.createModule}
                            className="btn btn-primary btn-block">
                            Create Module
                        </button>
                    </li>

                    {/*Curly brace syntax used to denote where JS code will be inserted into XML*/}
                    {/*Using .map() in this instance is the best way to iterate through the rows and
                    dynamically render rows in the XML*/}
                    {
                        this.state.modules.map(
                            ((currModule, key) => <ModuleItem
                                                module={currModule}
                                                selectModule={this.props.selectModule}
                                                deleteModule={this.deleteModule}
                                                selectedModule={this.props.selectedModule}
                                                editModule={this.props.editModule}
                                                key={key}
                                                title={currModule.title}/>
                            )
                        )
                    }
                </ul>
            </div>
        )
    }
}