export default class WidgetService {
    static myInstance = null;

    constructor() {
        this.url = "https://localhost:8080/api/widgets/";
    }


    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }


    createWidget(widget) {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    }


    findAllWidgets() {
        return fetch(this.url).then(function (response) {
            return response.json();
        });
    }

    findWidgetById(id) {
        const findUrl = this.url + id;

        return fetch(findUrl).then(function (response) {
            return response.json();
        });
    }

    updateWidget(id, widget) {
        const updateUrl = this.url + id;

        return fetch(updateUrl, {
            method: 'put',
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        }).then(function (response) {
            return response.json();
        });
    }

    deleteWidget(id) {
        const deleteUrl = this.url + id;
        return fetch(deleteUrl, {
            method: "delete"
        }).then(function (response) {
            return response.json();
        });
    }
}
