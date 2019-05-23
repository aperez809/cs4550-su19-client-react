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
    const courseFound = courseJson.find(course => course.id === id);
    if (courseFound == undefined) {
        alert(`Course with ID of ${id} not found`);
        return;
    }

    return courseFound;
}

function updateCourse(course) {
    return null;
}

function deleteCourse(course) {
    return null;
}

