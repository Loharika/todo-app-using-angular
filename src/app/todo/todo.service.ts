import { EventEmitter, Injectable, OnInit } from '@angular/core';

import { Subject } from 'rxjs/Subject';
import { TodoModel } from './todo.model';

@Injectable()
export class TodoService implements OnInit{
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

ngOnInit(){
  if(localStorage.getItem('todos')){
    this.todos=JSON.parse(localStorage.getItem('todos'))
    console.log(this.todos,"if")
  }
  console.log(this.todos,"else")
}
getTodosFromLocalStorage(){
  if(localStorage.getItem('todos')){
    this.todos=JSON.parse(localStorage.getItem('todos'))
  }
 
}

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
    this.storeTodos()
    this.todosChanged.next(this.todos.slice())
  }

  updateTodoCheckbox(index:number,checkedVal:boolean){
    const updatedTodo={
      id:this.todos[index].id,
      title:this.todos[index].title,
      checked:checkedVal
    }
    this.todos[index]=updatedTodo;
    this.storeTodos()
    this.todosChanged.next(this.todos.slice())
  }

  updateTodoTitle(index:number,updatedTodoTitle:string){
    const updatedTodo={
      id:this.todos[index].id,
      title:updatedTodoTitle,
      checked:this.todos[index].checked,
    }
    this.todos[index]=updatedTodo;
    this.storeTodos()
    this.todosChanged.next(this.todos.slice())
  }

  deleteTodo(index:number){
    this.todos.splice(index,1)
    this.storeTodos()
    this.todosChanged.next(this.todos.slice())
  }

  storeTodos(){
    localStorage.setItem('todos',JSON.stringify(this.todos))
  }
}