import { Component } from '@angular/core';

@Component({
  selector: 'sandbox',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: `<h1>Hello {{name}} is {{ age }} years old</h1>
            <h2>My name is {{person.firstName}} {{person.lastName}}</h2>
  `
  
})
export class SandboxComponent {
  name = 'John Doe';
  age = 32;
  person = {firstName: 'Steve', lastName: 'Smith'}

  constructor(){
    console.log("Constructor ran...");
    this.age = 35;
    this.hasBirthday();

  }

  hasBirthday(){
    this.age = this.age +11;
  }
}