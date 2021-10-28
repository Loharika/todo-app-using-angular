
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { TodoModel } from "../todo.model";
import { TodoService } from "../todo.service";

@Component({
    selector:'todo-list',
    templateUrl:'./todo-list.component.html',
    styleUrls:['./todo-list.component.css']
})
export class TodoListComponent implements OnInit ,OnDestroy {
    subscription:Subscription
    todos:TodoModel[];
    constructor(private todoService: TodoService) {
    }
 
    ngOnInit() {
        this.subscription=this.todoService.todosChanged
        .subscribe((todos:TodoModel[])=>{
          this.todos =todos
        })
        this.todoService.getTodosFromLocalStorage()
        this.todos = this.todoService.getTodos();
      }
      ngOnDestroy(){
        this.subscription.unsubscribe()
      }
}



  

  