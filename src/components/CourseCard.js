import React from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class CourseCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render () {
        return (
            <div className="card" styles={{width: '18rem'}}>
                <img className="card-img-top"
                     src="https://picsum.photos/300/200"/>
                <div className="card-body">
                    <h5 className="card-title">
                        {this.props.course.title}
                    </h5>
                    <p className="card-text">Card text.</p>
                    <Link to={`/course-editor/${this.props.course.id}`}
                          onClick={() => this.selectedCourse(this.state.course)}
                          className="btn btn-primary">
                        More...
                    </Link>
                </div>
            </div>
        )
    }

}