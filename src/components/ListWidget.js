import React from 'react';

const ListWidget = ({widget, deleteWidget}) =>
    <div className="mt-5 mb-5 container-fluid list-group">

        <form className="container-fluid list-group-item">
            <h1>List Widget</h1>
            <div className="form-group">
                <textarea className="form-control" rows="5" placeholder="Lorem Ipsum"></textarea>
            </div>
            <div className="form-group">
                <select className="form-control" value="Choose List Type">
                    <option>Unordered List</option>
                    <option>Ordered List</option>
                </select>
            </div>
            <div className="form-group">
                <input className="form-control" placeholder="Widget Name"/>
            </div>
            <h3>Preview</h3>
            <h1>
            </h1>
        </form>
    </div>;

export default ListWidget;