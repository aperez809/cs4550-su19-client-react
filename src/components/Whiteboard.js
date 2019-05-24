import React from "react";
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CourseGrid from './CourseGrid'
import CourseList from './CourseList'
import CourseService from '../services/CourseService';

let courseService =
    CourseService.getInstance();
const courses =
    courseService.findAllCourses();


export default class Whiteboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: courses[0]
        }
    }

    selectCourse = course => {
        this.setState({selectedCourse: course});
    };

    deleteCourse = id => {
        courseService.deleteCourse(id)
    };



    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>Whiteboard</h1>

                    <Link to="/course-list"><button className="btn btn-primary">List</button></Link>
                    <Link to="/course-grid"><button className="btn btn-primary">Grid</button></Link>
                    <Link to="/course-editor"><button className="btn btn-primary">Editor</button></Link>

                    <Route path="/course-list"
                           render={() => <CourseList deleteCourse={this.deleteCourse}
                                                     selectCourse={this.selectCourse}
                                                     courses={courses}/>}/>
                    <Route path="/course-grid"
                           render={() => <CourseGrid selectCourse={this.selectCourse}
                                                     courses={courses}/>}/>
                    <Route path="/course-editor/:courseId"
                           render={() => <CourseEditor selectCourse={this.selectCourse}
                                                       courses={courses}/>}/>
                </div>
            </Router>
        )
    }
}


