import React from 'react';

const HeadingWidget = ({widget, deleteWidget}) =>
    <div className="mt-5 mb-5 container-fluid list-group">

    <form className="container-fluid list-group-item">
        <h1>Heading Widget</h1>
        <div className="form-group">
            <input className="form-control" placeholder="Heading Text"/>
        </div>
        <div className="form-group">
            <select className="form-control" value="Choose Heading Size">
                <option>Heading 1</option>
                <option>Heading 2</option>
                <option>Heading 3</option>
                <option>Heading 4</option>
                <option>Heading 5</option>
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

export default HeadingWidget;