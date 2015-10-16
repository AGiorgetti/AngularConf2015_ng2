/**
	 * the interface that represent the objects that are coming out of the
	 * remote web service: this is the only thing that we need (alongside with the api calls)
	 */
export interface ITodoItem {
	id: number;
	task: string;
	completed: boolean;
}
	
/**
 * an object that describes a task to do
 */
export class TodoItem implements ITodoItem {
	id: number;
	task: string;
	completed: boolean = false;

	constructor(id: number, task: string) {
		this.id = id;
		this.task = task;
	}
}