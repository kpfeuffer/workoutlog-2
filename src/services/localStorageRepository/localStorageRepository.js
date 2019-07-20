export default class localStorageRepository {
    localStorage;
    constructor(localStorage) {
        this.localStorage = localStorage;
    }

    getKeys() {
        return Object.keys(this.localStorage);
    }

    getAll(key) {
        try{
            return JSON.parse(this.localStorage.getItem(key) || "{}");

        }
        catch(ex) {
            return ex;
        }
    }
}