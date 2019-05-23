import React from 'react';

const ModuleItem = ({module, deleteModule}) =>
    <li className="list-group-item">
        {module.title}
        <button className="btn btn-danger float-right" onClick={() => deleteModule(module.id)}>Delete</button>
    </li>;

export default ModuleItem;