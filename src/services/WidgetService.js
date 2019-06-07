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
        return fetch("https://limitless-citadel-58042.herokuapp.com/api/widgets/", {
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
        return fetch("https://limitless-citadel-58042.herokuapp.com/api/widgets/").then(function (response) {
            return response.json();
        });
    };

    findWidgetById(id) {
        const findUrl = "https://limitless-citadel-58042.herokuapp.com/api/widgets/" + id;

        return fetch(findUrl).then(function (response) {
            return response.json();
        });
    }

    updateWidget(widget) {
        const updateUrl = "https://limitless-citadel-58042.herokuapp.com/api/widgets/" + widget.id;
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
        const deleteUrl = "https://limitless-citadel-58042.herokuapp.com/api/widgets/" + id;
        return fetch(deleteUrl, {
            method: "delete"
        }).then(function (response) {
            return response.json();
        });
    }
}
