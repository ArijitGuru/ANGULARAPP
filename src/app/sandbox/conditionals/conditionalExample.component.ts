import { Component } from "@angular/core";

@Component({
    selector: 'conditional',
    template: `
    <h1>Hello World from Conditional Example</h1>
    <p> Example 1 - using *ngIf - <span *ngIf="showName"> Hello {{name}} </span> </p>

    <p> Example 2 - using ternary operator - Hello {{showName ? name : 'World'}}  </p>

    <p> Example 3 - using ng-template - Hello 
        <span *ngIf="showName; else noName">{{ name }}
        </span>
        <ng-template #noName>World</ng-template>
        
    </p>
    
    <div [ngSwitch]="greeting">
    <h1>Example - ngSwitch, ngSwitchCase, ngSwitchDefault</h1>
        <div *ngSwitchCase="'1'"> Hello World.  </div>
        <div *ngSwitchCase="'2'"> Hi World.  </div>
        <div *ngSwitchCase="'3'"> Hola World.  </div>
        <div *ngSwitchCase="'4'"> Namaste World.  </div>
        <div *ngSwitchDefault> Hello World.  </div>

    </div>
    
    `
})

export class conditionalEcampleComponent{
    name:string = 'Arijit Adhikary';
    showName:boolean = true;
    greeting:number = 4;
}