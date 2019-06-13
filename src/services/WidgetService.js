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

    findAllWidgets(tid) {
        const getUrl = "http://localhost:8080/api/topics/" + tid + "/widgets";
        return fetch(getUrl).then(response => {
            return response.json();
        });
    };


    findWidgetById(id) {
        const getUrl = "http://localhost:8080/api/topics/" + tid + "/widgets";

        return fetch(getUrl).then(function (response) {
            return response.json();
        });
    }

    updateWidget(widget) {
        const updateUrl = "http://localhost:8080/api/widgets/" + widget.id;
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
        const deleteUrl = "http://localhost:8080/api/widgets/" + id;
        return fetch(deleteUrl, {
            method: "delete"
        }).then(function (response) {
            return response.json();
        });
    }

    createWidget(widget) {
        const createUrl = "http://localhost:8080/api/widgets";
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
