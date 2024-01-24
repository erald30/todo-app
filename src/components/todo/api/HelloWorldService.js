import { apiClient } from "./ApiClient";


export const retrieveHelloWorld = () => apiClient.get('/hello-world');

export const retrieveHelloWorldPathVariable = (username) => apiClient.get(`/hello-world/path-variable/${username}`)



