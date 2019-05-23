import React from "react";
import CourseCard from './CourseCard';
import CourseEditor from "./CourseEditor";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import CourseGrid from './CourseGrid'
import CourseList from './CourseList'

export default class Whiteboard extends React.Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <h1>Whiteboard</h1>

                    <Link to="/course-list"><button className="btn btn-primary">List</button></Link>
                    <Link to="/course-grid">Grid</Link>
                    <Link to="/course-editor">Editor</Link>

                    <Route path="/course-list"
                           component={CourseList}/>
                    <Route path="/course-grid"
                           component={CourseGrid}/>
                    <Route path="/course-editor"
                           component={CourseEditor}/>

                    <div className="card-group">
                        <CourseCard title="CS5200"/>
                        <CourseCard title="CS4550"/>
                        <CourseCard title="CS3200"/>
                        <CourseCard title="CS3500"/>
                        <CourseCard title="CS2500"/>

                    </div>

                </div>
            </Router>
        )
    }
}


