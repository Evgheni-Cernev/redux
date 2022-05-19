const API_BASE_ADDRESS = 'http://localhost:3000';
export default class Api {
    static getProducts() {
        const uri = API_BASE_ADDRESS + "/products";
        return fetch(uri, {
            method: 'GET'
        }).then((data) => data.json());
    }

    static getComments() {
        const uri = API_BASE_ADDRESS + "/comments";
        return fetch(uri, {
            method: 'GET'
        }).then((data) => data.json());
    }
}
