import { Component, Input } from "@angular/core";
import { EventEmitter } from "stream";
import { TodoModel } from "../../todo.model";
import { TodoService } from "../../todo.service";

@Component({
    selector:'todo-item',
    templateUrl:'./todo-item.component.html',
    styleUrls:['./todo-item.component.css']
})
export class TodoItemComponent {
    @Input() todo: TodoModel;
  @Input() index:number

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  onUpdateTodoCheckbox(index:number,event){
    this.todoService.updateTodoCheckbox(index,event.target.checked)

  }

  onUpdateTodoTitle(index,event){
    console.log(event.target.value)
    this.todoService.updateTodoTitle(index,event.target.value)
  }

  onDeleteTodo(index){
    this.todoService.deleteTodo(index)
  }
}