import { Component, Input } from "@angular/core";
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
}