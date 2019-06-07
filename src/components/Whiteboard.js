import React from "react";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import CourseGrid from './CourseGrid'
import CourseList from './CourseTable'
import CourseService from '../services/CourseService';
import WidgetService from "../services/WidgetService";
import WidgetReducer from '../reducers/WidgetReducer';
import WidgetListContainer from '../containers/WidgetListContainer';

let courseService =
    CourseService.getInstance();
var courses =
    courseService.findAllCourses();
let wServ = WidgetService.getInstance();
const store = createStore(WidgetReducer);

export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: courses[0],
            courses: courses,
            courseInProgress: {
                id: new Date().getTime(),
                title: ""
            }
        };
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
                    id: new Date().getTime(),
                    title: event.target.value,
                    modules: []
                }),
            courseInProgress: {
                id: new Date().getTime(),
                title: ""
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
            <div>
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

                        <div>
                            <button onClick={() => wServ.findAllWidgets()}>Find All Widgets</button>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>

                        </div>

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
                               render={() => <CourseList deleteCourse={this.deleteCourse}
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

                        <WidgetListContainer/>

                    </div>

            </div>
            </Provider>
        )
    }
}


