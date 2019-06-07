export default class WidgetService {
    static myInstance = null;

    static getInstance() {
        if (WidgetService.myInstance == null) {
            WidgetService.myInstance =
                new WidgetService();
        }
        return this.myInstance;
    }


    createWidget(widget) {
        return fetch("http://localhost:8080/api/widgets/", {
            method: "POST",
            body: JSON.stringify(widget),
            headers: {
                "content-type": "application/json"
            }
        }).then(function (response) {
            return response.json();
        });
    }


    findAllWidgets = () => {
        return fetch("http://localhost:8080/api/widgets/").then(function (response) {
            return response.json();
        });
    };

    findWidgetById(id) {
        const findUrl = "http://localhost:8080/api/widgets/" + id;

        return fetch(findUrl).then(function (response) {
            return response.json();
        });
    }

    updateWidget(widget) {
        const updateUrl = `http://localhost:8080/api/widgets/` + widget.id;
        console.log(updateUrl);
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
}
