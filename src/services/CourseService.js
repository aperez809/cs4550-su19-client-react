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
    courseJson.filter(c => c.id !== course.id);
    courseJson.push(course);
    return courseJson;
}


function deleteCourse(course) {
    courseJson.filter(c => c.id !== course.id);
    return courseJson
}

