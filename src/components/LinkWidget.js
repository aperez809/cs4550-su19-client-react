import React from 'react';

const LinkWidget = ({widget, deleteWidget}) =>
    <div className="mt-5 mb-5 container-fluid list-group">

        <form className="container-fluid list-group-item">
            <h1>Link Widget</h1>
            <div className="form-group">
                <input className="form-control" placeholder="Link URL"/>
            </div>

            <div className="form-group">
                <input className="form-control" placeholder="Link Text"/>
            </div>

            <div className="form-group">
                <input className="form-control" placeholder="Widget Name"/>
            </div>
            <h3>Preview</h3>
            <h1>
            </h1>
        </form>
    </div>;

export default LinkWidget;