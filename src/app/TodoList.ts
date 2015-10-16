import { ITodoItem } from "./TodoItem";
import { TodoListService, ITodoListService } from "./TodoListService";
import { Component, View, bind, Inject, NgFor, FORM_DIRECTIVES } from "angular2/angular2";
// maybe grabbing everything is better!
import * as Angular2 from "angular2/angular2";

@Component({
	selector: "todo-list",
	properties: ['todos']
	/* interfaces do not work here?
	bindings: [
		bind(ITodoListService).toClass(TodoListService)
	]
	*/
})
@View({
	templateUrl: "app/todolist.html",
	directives: [NgFor, FORM_DIRECTIVES]
})
export class TodoList {
	
	todos: ITodoItem[];

	constructor(
		@Inject(TodoListService)
		private todoListService: ITodoListService
	) {
		this.todos = todoListService.todos;
	}

	addTodo(task: string): void {
		this.todoListService.addTodo(task);
	}

	removeTodo(id: number): void {
		// ask for confirmation
		if (confirm("Do you really want to delete task: " + id + "?")) {
			this.todoListService.removeTodo(id);
		}
	}
}