import { apiClient } from "./ApiClient";

export const retrieveAllTodos = () => apiClient.get('users/todos')

export const retrieveTodosPathVariable = (name) => apiClient.get(`/users/${name}/todos`)

export const retrieveTodoById = (id) => apiClient.get(`/users/${id}/todo`)

export const deleteTodoById = (id) => apiClient.delete(`/users/todo/${id}`)

export const updateTodoApi = (todo) => apiClient.put(`/users/todo`,todo)

export const createTodoApi = (todo) => apiClient.post(`/users/todo`,todo)
