

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
        const getUrl = "https://limitless-citadel-58042.herokuapp.com/api/modules";
        return fetch(getUrl).then(response => {
            return response.json();
        });
    }

    findModuleById(id) {
        const getUrl = "https://limitless-citadel-58042.herokuapp.com/api/modules/" + id;
        return fetch(getUrl).then(response => {
            return response.json();
        });
    }

    updateModules(id, module) {
        const updateUrl = "https://limitless-citadel-58042.herokuapp.com/api/modules/" + id;
        return fetch(updateUrl, {
            method: 'put',
            body: JSON.stringify(module),
            headers: {
                'content-type': 'application/json'
            }
        });
    }


    deleteModule(id) {
        const deleteUrl = "https://limitless-citadel-58042.herokuapp.com/api/modules/" + id;
        return fetch(deleteUrl, {
            method: 'delete',
        }).then(response => {
            return response.json();
        });
    }

    createModule(module) {
        const createUrl = "https://limitless-citadel-58042.herokuapp.com/api/modules";
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
