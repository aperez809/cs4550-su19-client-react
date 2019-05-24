import courses from '../components/courses.json';

export default class CourseService {
    static myInstance = null;

    constructor() {
        this.courseJson = courses;
    }


    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }


    createCourse(course) {
        this.courseJson.push(course);
        return this.courseJson;
    }


    findAllCourses() {
        return this.courseJson;
    }

    findCourseById(id) {
        const courseFound = this.courseJson.find(course => course.id === id);
        if (courseFound == undefined) {
            alert(`Course with ID of ${id} not found`);
            return;
        }

        return courseFound;
    }

    updateCourse(id, course) {
        this.courseJson.filter(c => c.id !== id);
        return this.createCourse(course);
    }

    deleteCourse(id) {
        this.courseJson = this.courseJson.filter(c => c.id !== id);
        return this.courseJson;
    }
}
