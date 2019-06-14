

export default class CourseService {
    static myInstance = null;

    constructor() {}


    static getInstance() {
        if (CourseService.myInstance == null) {
            CourseService.myInstance =
                new CourseService();
        }
        return this.myInstance;
    }


    findAllCourses() {
        const getUrl = "https://limitless-citadel-58042.herokuapp.com/api/courses";
        return fetch(getUrl).then(response => {
            return response.json();

        });
    }

    findCourseById(id) {
        const getUrl = "https://limitless-citadel-58042.herokuapp.com/api/courses/" + id;
        return fetch(getUrl).then(response => {
            return response.json();
        });
    }

    updateCourse(id, course) {
        const updateUrl = "https://limitless-citadel-58042.herokuapp.com/api/courses/" + id;
        return fetch(updateUrl, {
            method: 'put',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
            }
        });
    }


    deleteCourse(id) {
        const deleteUrl = "https://limitless-citadel-58042.herokuapp.com/api/courses/" + id;
        return fetch(deleteUrl, {
            method: 'delete',
        }).then(response => {
            return response.json();
        });
    }

    createCourse(course) {
        const createUrl = "https://limitless-citadel-58042.herokuapp.com/api/courses/";
        return fetch(createUrl, {
            method: 'post',
            body: JSON.stringify(course),
            headers: {
                'content-type': 'application/json'
                }
            }).then(response => {
                return response.json();
        });
    };
}
