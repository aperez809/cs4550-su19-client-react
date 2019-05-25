import React from 'react';

const ModuleItem = ({module, deleteModule, selectModule, editModule, selectedModule}) =>
    <li onClick={() => selectModule(module)}
        className={module === selectedModule ? "list-group-item active": "list-group-item"}>
        {module.title}
        <button className="ml-1 btn btn-danger float-right"
                onClick={() => deleteModule(module.id)}>Delete</button>
        <button className="btn btn-warning float-right"
                onClick={() => editModule(module.id)}>Edit</button>
    </li>;

export default ModuleItem;