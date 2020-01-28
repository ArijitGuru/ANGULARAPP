import { Component } from "@angular/core";

@Component({
    selector: 'mouseeventschangeproperties',
    template: `

        <h1> Change Properties with Mouse events</h1>

        <br/>
        <button id="btn" (click)="changeValue()"> Change Value </button>
        <h1>{{ text }}</h1>

        <div *ngIf="value">
            <h1>{{ text }}</h1>
        </div>
    
    `
})

export class MouseEventsPropChangeComponent{
    text:string = 'Hello World';
    value:boolean = true;

    changeValue(){
        // this.text = 'Goodbye World';
        this.value = !this.value;
    }
}