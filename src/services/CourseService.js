import courses from '../components/courses.json';

const courseJson = courses;


function createCourse(course) {
    courseJson.push(course);
    return courseJson;
}


function findAllCourses() {
    return courseJson;
}

function findCourseById(id) {
    return null;
}

function updateCourse(course) {
    return null;
}

function deleteCourse(course) {
    return null;
}

