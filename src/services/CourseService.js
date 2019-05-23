import courses from '../components/courses.json';

export default class CourseService {

    constructor() {
        this.courseJson = courses;
    }


    function

    createCourse(course) {
        this.courseJson.push(course);
        return this.courseJson;
    }


    function

    findAllCourses() {
        return this.courseJson;
    }

    function

    findCourseById(id) {
        const courseFound = this.courseJson.find(course => course.id === id);
        if (courseFound == undefined) {
            alert(`Course with ID of ${id} not found`);
            return;
        }

        return courseFound;
    }

    function

    updateCourse(id, course) {
        this.courseJson.filter(c => c.id !== id);
        return this.createCourse(course);
    }


    function

    deleteCourse(id) {
        this.courseJson.filter(c => c.id !== id);
        return this.courseJson
    }

}
