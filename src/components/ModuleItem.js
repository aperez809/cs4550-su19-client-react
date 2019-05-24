import React from 'react';

const ModuleItem = ({module, deleteModule, selectModule}) =>
    <li className="list-group-item"
        onClick={() => selectModule(module)}>
        {module.title}
        <button className="btn btn-danger float-right"
                onClick={() => deleteModule(module.id)}>Delete</button>
    </li>;

export default ModuleItem;