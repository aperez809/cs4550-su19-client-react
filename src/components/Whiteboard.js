import React from "react";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CourseGrid from './CourseGrid'
import CourseList from './CourseList'
import CourseService from '../services/CourseService';

let courseService =
    CourseService.getInstance();
var courses =
    courseService.findAllCourses();


export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: courses[0],
            courses: courses
        }
    }

    selectCourse = course => {
        this.setState({selectedCourse: course});
    };

    deleteCourse = id => {
        this.setState({
            courses: courseService.deleteCourse(id)
        });
    };

    createCourse = event => {
        event.preventDefault();
        console.log(event.target);
        this.setState({
            courses: courseService.createCourse(
                {
                    id: new Date().getTime(),
                    title: event.target.value,
                    modules: []
                })
        });
    };



    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                    <a className="navbar-brand" styles={{'backgroundColor':'red'}} href="#">Course Manager</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                            <form className="form-inline">
                            <input className="form-control mr-sm-2" placeholder="New Course Title" aria-label="New Course"/>
                            <button onClick={this.createCourse} className="btn btn-outline-success my-2 my-sm-0">Create</button>
                        </form>
                    </div>
                </nav>

                    <div className="container-fluid">
                        <h1>Whiteboard</h1>

                        <Router>
                        <Link to="/course-list">
                            <button className="btn btn-primary">List</button>
                        </Link>
                        <Link to="/course-grid">
                            <button className="btn btn-primary">Grid</button>
                        </Link>
                        <Link to="/course-editor">
                            <button className="btn btn-primary">Editor</button>
                        </Link>

                        <Route path="/course-list"
                               render={() => <CourseList deleteCourse={this.deleteCourse}
                                                         selectCourse={this.selectCourse}
                                                         courses={this.state.courses}/>}/>
                        <Route path="/course-grid"
                               render={() => <CourseGrid selectCourse={this.selectCourse}
                                                         courses={this.state.courses}/>}/>
                        <Route path="/course-editor/:courseId"
                               render={() => <CourseEditor selectCourse={this.selectCourse}
                                                           courses={this.state.courses}/>}/>
                        </Router>
                    </div>

            </div>

        )
    }
}


