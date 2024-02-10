import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[];
  item :any;
  constructor() {
    this.item = localStorage.getItem("todos");
    if(this.item==null){
    this.todos=[];}
    else{
      this.todos = JSON.parse(this.item); 
    }
   }

  ngOnInit(): void {
  }
  todoDelete(todo:Todo)
  {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    console.log("Event is listen Succesfully");
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  todoadd(todo:Todo)
  {
    this.todos.push(todo);
    console.log("Event is listen Succesfully");
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }
  togglecheck(todo:Todo)
  {
    const index = this.todos.indexOf(todo);
    this.todos[index].active =!this.todos[index].active;
    localStorage.setItem("todos",JSON.stringify(this.todos));
  }

}
