
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";  
import { InputFieldComponent } from "./input-field/input-field.component";
import { TodoDashboardComponent } from "./todo-dashboard/todo-dashboard.component";
import { TodoItemComponent } from "./todo-list/todo-item/todo-item.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

@NgModule({
    declarations:[
        InputFieldComponent,
        TodoListComponent,
        TodoItemComponent,
        TodoDashboardComponent],
    imports:[
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ]
})
export class TodoModule{

}