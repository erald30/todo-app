package com.in28minutes.rest.webservices.restfulwebservices.todo;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController {

    private final TodoService todoService;

    public TodoController(TodoService todoService) {
        this.todoService = todoService;
    }

    @GetMapping("/users/todos")
    public List<Todo> retrieveAllTodos(){
        return todoService.findAll();
    }

    @GetMapping("/users/{username}/todos")
    public List<Todo> retrieveTodos(@PathVariable String username){
        return todoService.findByUsername(username);
    }

    @GetMapping("/users/{id}/todo")
    public Todo retrieveTodo(@PathVariable Integer id){
        return todoService.findById(id);
    }

    @DeleteMapping("/users/todo/{id}")
    public void deleteTodo(@PathVariable Integer id){

     todoService.deleteById(id);
    }

    @PutMapping("/users/todo")
    public  Todo updateTodo(@RequestBody Todo todo){
        todoService.updateTodo(todo);
        return todo;
    }

    @PostMapping("/users/todo")
    public Todo createTodo(@RequestBody Todo todo){
       Todo tod = todoService.addTodo(todo.getUsername(),todo.getDescription(),todo.getTargetDate(),todo.isDone());
        return tod;
    }
}
