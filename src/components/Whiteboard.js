import React from "react";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import CourseGrid from './CourseGrid';
import CourseTable from './CourseTable';
import CourseListContainer from '../containers/CourseListContainer';
import CourseService from '../services/CourseService';
import WidgetService from "../services/WidgetService";
import reducer from '../reducers/index';

const store = createStore(reducer);

let courseService =
    CourseService.getInstance();
var courses =
    courseService.findAllCourses();
let wServ = WidgetService.getInstance();



export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: courses[0],
            courses: [],
            courseInProgress: {
                title: "",
                author: ""
            }
        };
        courseService.findAllCourses().then(data => {
            console.log(data);
            this.setState({courses: data})
        });
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
        console.log(event.target.value);
        this.setState({
            courses: courseService.createCourse(
                {
                    title: event.target.value,
                    modules: [],
                    author: ""
                }),
            courseInProgress: {
                title: "",
                modules: [],
                author: ""
            }
        });
    };

    courseTitleChanged = (event) => {
        console.log(event.target.value);
        this.setState({
            courseInProgress: {
                title: event.target.value,
            }
        });
    };



    render() {
        return (
            <Provider store={store}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
                    <a className="navbar-brand" styles={{'backgroundColor':'red'}} href="#">Course Manager</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                            <form className="form-inline">
                            <input className="form-control mr-sm-2" placeholder="New Course Title" aria-label="New Course"/>
                            <button onChange={this.courseTitleChanged}
                                    onClick={this.createCourse}
                                    value={this.state.courseInProgress.title}
                                    className="btn btn-outline-success my-2 my-sm-0">Create</button>
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
                        {/*<Link to="/course-editor">
                            <button className="btn btn-primary">Editor</button>
                        </Link>*/}

                        <Route path="/course-list"
                               render={() => <CourseTable deleteCourse={this.deleteCourse}
                                                         selectCourse={this.selectCourse}
                                                         courses={this.state.courses}/>}/>
                        <Route path="/course-grid"
                               render={() => <CourseGrid selectCourse={this.selectCourse}
                                                         deleteCourse={this.deleteCourse}
                                                         courses={this.state.courses}/>}/>
                        <Route path="/course-editor/:courseId"
                               render={() => <CourseEditor selectCourse={this.selectCourse}
                                                           courses={this.state.courses}/>}/>
                        </Router>

                    </div>
            </Provider>
        )
    }
}


