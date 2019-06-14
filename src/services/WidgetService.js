export default class WidgetService {
    static myInstance = null;

    constructor() {}

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }

    findAllWidgets() {
        const getUrl = "http://localhost:8080/api/widgets/";
        return fetch(getUrl).then(response => {
            return response.json();
        });
    };


    findWidgetById(id) {
        const getUrl = "https://limitless-citadel-58042.herokuapp.com/api/topics/" + id + "/widgets";

        return fetch(getUrl).then(function (response) {
            return response.json();
        });
    }

    updateWidget(widget) {
        const updateUrl = "https://limitless-citadel-58042.herokuapp.com/api/widgets/" + widget.id;
        return fetch(updateUrl, {
            method: 'PUT',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    }

    deleteWidget(id) {
        const deleteUrl = "https://limitless-citadel-58042.herokuapp.com/api/widgets/" + id;
        return fetch(deleteUrl, {
            method: "delete"
        }).then(function (response) {
            return response.json();
        });
    }

    createWidget(widget) {
        const createUrl = "https://limitless-citadel-58042.herokuapp.com/api/widgets/";
        return fetch(createUrl, {
            method: "POST",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        }).then(function (response) {
            return response.json();
        });
    }
}
