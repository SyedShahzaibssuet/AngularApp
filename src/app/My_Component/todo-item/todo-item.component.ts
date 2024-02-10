import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Todo } from "../../Todo";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todoo: Todo = new Todo;
  @Output() deletetodo: EventEmitter<Todo> = new EventEmitter();
  @Output() checkboxtodo: EventEmitter<Todo> = new EventEmitter();
  constructor() {
}

  ngOnInit(): void {
  }
  onclick(todoo:Todo)
  {
    this.deletetodo.emit(todoo);
    console.log(todoo);
  }
  onCheckedBox(todo:Todo)
  {
    this.checkboxtodo.emit(todo);
  }
}
