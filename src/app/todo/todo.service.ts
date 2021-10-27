import { EventEmitter, Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { TodoModel } from './todo.model';

@Injectable()
export class TodoService {
  todosChanged =new Subject<TodoModel[]>();
  private todos: TodoModel[] = [
    new TodoModel(
      '134dsbchxbvwgye324t3btx36xr3tx3xq7',
      'What are you saying?',
      false,
      ),
    new TodoModel('x36xr3tx3xq784373cbt834c35yc3n',
      'What else you need to say?',
      true,
       )
  ];
//   private todos: TodoModel[] = []
  constructor() {}

  setTodos(todos:TodoModel[]){
    this.todos=todos
    this.todosChanged.next(this.todos.slice())

  }
  getTodos() {
    return this.todos.slice();
  }
 
  
  getRecipe(index:number){
    return this.todos.slice()[index]
  }

  addTodo(todo:TodoModel){
    this.todos.push(todo)
    this.todosChanged.next(this.todos.slice())
  }

  updateTodo(index:number,newTodo:TodoModel){
    this.todos[index]=newTodo;
    this.todosChanged.next(this.todos.slice())
  }

  deleteTodo(index:number){
    this.todos.splice(index,1)
    this.todosChanged.next(this.todos.slice())
  }
}