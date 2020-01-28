import { Component } from '@angular/core';


@Component({
    selector : 'loopexample',
    template: `
        <h1> Loop Example</h1>
        <ul>
            <li *ngFor="let people of people; let i = index">
               {{i+1}} {{people}}
            </li>
        </ul>

        
        <h1> Loop Example with object array</h1>
        <ul>
            <li *ngFor="let people of people2; let i = index">
               {{i+1}} {{people.firstName}}
            </li>
        </ul>
    
    `

})

export class loopExampleComponent{
    people:string[] = ['Arijit', 'Arindam', 'Indranil'];

    people2 =  [
        {
            firstName: 'Rick',
            lastName: 'Grimes'
        },
        {
            firstName: 'Mike',
            lastName: 'Grimes'
        },
        {
            firstName: 'Peter',
            lastName: 'Grimes'
        },
        {
            firstName: 'Bart',
            lastName: 'Grimes'
        }

    ];

}