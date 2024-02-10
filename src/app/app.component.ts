import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  constructor(){
  // setTimeout(() => {
  //   this.title="I have changed this title through set time out";
  // }, 1000);
}
}
