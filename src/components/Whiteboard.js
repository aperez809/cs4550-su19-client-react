import React from "react";
import CourseCard from './CourseCard';
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CourseGrid from './CourseGrid'
import CourseList from './CourseList'
import courses from './courses.json';

export default class Whiteboard extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>Whiteboard</h1>

                    <Link to="/course-list"><button className="btn btn-primary">List</button></Link>
                    <Link to="/course-grid"><button className="btn btn-primary">Grid</button></Link>
                    <Link to="/course-editor"><button className="btn btn-primary">Editor</button></Link>

                    <Route path="/course-list"
                           render={() => <CourseList courses={courses}/>}/>
                    <Route path="/course-grid"
                           render={() => <CourseGrid courses={courses}/>}/>
                    <Route path="/course-editor/:courseId"
                           render={() => <CourseEditor courses={courses}/>}/>

                    {/*<div className="card-group">
                        <CourseCard title="CS5200"/>
                        <CourseCard title="CS4550"/>
                        <CourseCard title="CS3200"/>
                        <CourseCard title="CS3500"/>
                        <CourseCard title="CS2500"/>

                    </div>*/}

                </div>
            </Router>
        )
    }
}


