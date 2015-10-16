import { HTTP_BINDINGS } from 'angular2/http';
import { bootstrap } from 'angular2/angular2';

import { TodoList } from './TodoList';
import { TodoListService } from "./TodoListService";

bootstrap(TodoList, [HTTP_BINDINGS, TodoListService]);