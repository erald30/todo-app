package com.in28minutes.rest.webservices.restfulwebservices.todo;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.stereotype.Service;

@Service
public class TodoService {

	private final TodoRepository todoRepository;

	public TodoService(TodoRepository todoRepository) {
		this.todoRepository = todoRepository;
	}


	public List<Todo> findAll(){
		return todoRepository.findAll();
	}
	
	public List<Todo> findByUsername(String username){

		/*Predicate<? super Todo> predicate =
				todo -> todo.getUsername().equalsIgnoreCase(username);
		return todos.stream().filter(predicate).toList();*/

	return 	todoRepository.findByUsernameIgnoreCase(username);
	}
	
	public Todo addTodo(String username, String description, LocalDate targetDate, boolean done) {
		Todo todo = new Todo(username,description,targetDate,done);
		todoRepository.save(todo);
		return todo;
	}
	
	public void deleteById(Integer id) {

		todoRepository.deleteById(id);
	}

	public Todo findById(Integer id) {

		/*Predicate<? super Todo> predicate = todo -> todo.getId() == id;
		Todo todo = todos.stream().filter(predicate).findFirst().get();
		return todo;*/
		Todo opTodo = todoRepository.findById(id).orElseThrow(
				()-> new IllegalStateException("No Todos with this id: "+id));
		return opTodo;
	}

	public void updateTodo(Todo todo) {
		Todo tod = findById(todo.getId());
		tod.setUsername(todo.getUsername());
		tod.setDescription(todo.getDescription());
		tod.setTargetDate(todo.getTargetDate());
		todoRepository.save(tod);

		List<Todo> todos = findAll();
		int index = todos.indexOf(tod);
		todos.set(index,tod);
	}
}