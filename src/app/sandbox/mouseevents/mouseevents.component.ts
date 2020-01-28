import { Component } from "@angular/core";

@Component({
    selector: 'mouseevent',
    template: `

        <h1> Mouse Event Examples</h1>
        <button id="btn" (click)="fireEvent('Hello')"> Click Event </button>

        <br/>
        <button id="btn" (click)="fireEvent2($event, 'Hello')"> Click to see event 
        </button>

        <br/>        
        <button id="btn" (mouseover)="fireEvent3($event, 'Hello')"> MouseOver event</button>

        <br/>        
        <button id="btn" (mousedown)="fireEvent3($event, 'Hello')"> MouseDown event</button>
        <br/>        
        <button id="btn" (mouseup)="fireEvent3($event, 'Hello')"> Mouseup event</button>
        <br/>        
        <button id="btn" (dblclick)="fireEvent3($event, 'Hello')"> DoubleClick event</button>
        <br/>        
        <button id="btn" (drag)="fireEvent3($event, 'Hello')"> Drag event</button>
        <br/>        
        <button id="btn" (dragover)="fireEvent3($event, 'Hello')"> Drag Over event</button>

    `

})

export class MouseEventsComponent{

    fireEvent(greeting){
        console.log("Button Clicked");
        console.log(greeting + " World");

    }
    fireEvent2(e, greeting){
        console.log(e);

    }

    fireEvent3(e, greeting){
        console.log(e.type);

    }

}