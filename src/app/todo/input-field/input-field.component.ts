import { Component, OnInit } from "@angular/core";
import { FormGroup, NgForm } from "@angular/forms";
import { TodoService } from "../todo.service";
 const digit=6
@Component({
    selector:'todo-input-field',
    templateUrl:'./input-field.component.html',
    styleUrls:['./input-field.component.css']
})
export class InputFieldComponent  {
    addTodoForm:FormGroup
    error:boolean
    constructor(private todoService:TodoService){
        this.error=false
    }

    onAddTodo(form:NgForm){
        const id=Math.random().toFixed(digit)
        if(form.value.todo!==' '){
            this.error=true
            const newTodo={
                id:id,
                title:form.value.todo,
                checked:false
            }
            this.todoService.addTodo(newTodo)
            form.reset()
            return;
        }
        this.error=true
    }
}