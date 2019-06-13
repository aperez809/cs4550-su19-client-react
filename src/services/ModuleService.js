

export default class ModuleService {
    static myInstance = null;

    constructor() {}


    static getInstance() {
        if (ModuleService.myInstance == null) {
            ModuleService.myInstance =
                new ModuleService();
        }
        return this.myInstance;
    }


    findAllModules() {
        const getUrl = "http://localhost:8080/api/modules";
        return fetch(getUrl).then(response => {
            return response.json();
        });
    }

    findModuleById(id) {
        const getUrl = "http://localhost:8080/api/modules" + id;
        return fetch(getUrl).then(response => {
            return response.json();
        });
    }

    updateModules(id, module) {
        const updateUrl = "http://localhost:8080/api/modules" + id;
        return fetch(updateUrl, {
            method: 'put',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        });
    }


    deleteModule(id) {
        const deleteUrl = "http://localhost:8080/api/modules" + id;
        return fetch(deleteUrl, {
            method: 'delete',
        }).then(response => {
            return response.json();
        });
    }

    createModule(module) {
        const createUrl = "http://localhost:8080/api/modules";
        return fetch(createUrl, {
            method: 'post',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => {
            return response.json();
        });
    };
}
