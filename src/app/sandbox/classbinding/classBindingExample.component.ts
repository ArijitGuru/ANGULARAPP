import { Component } from "@angular/core";

@Component({
    selector: 'classBindingExample',
    template:`
    
    <h1> CSS Class Binding Example </h1>
    
    <h4 [class.special]="isSpecial"> This CSS class binding is special. </h4>
    
    <h4 [ngClass]="currentClasses"> This div is initially special and saveable.</h4>
    
    
    `,

    styles:[
        `
            .special {
                color:green;
            }
            .saveable{
                text-transform:uppercase;
            }
        `
    ]
})

export class ClassBindingExampleComponent{
    isSpecial:boolean = true;
    canSave:boolean = true;
    currentClasses = {};

    constructor(){
        this.setCurrentClasses();
    }

    setCurrentClasses(){
        this.currentClasses = {
            saveable:this.canSave,
            special: this.isSpecial
        }
    }
}