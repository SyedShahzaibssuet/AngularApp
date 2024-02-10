import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Todo } from "../../Todo";
@Component({
  selector: 'app-addtodo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  title: string;
  description: string;
  @Output() addtodo: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit()
  {
    const todo ={
      sno: 1,
      title: this.title,
      desc:this.description,
      active:true
    };
    this.addtodo.emit(todo);
    console.log("add Event Emiter called");
  }
}
