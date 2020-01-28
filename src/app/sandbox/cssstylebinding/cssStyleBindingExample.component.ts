import { Component } from "@angular/core";

@Component({
    selector : 'stylebindingexample',
    template : `
    
    <h1> CSS Style Binding Example</h1>
    
    <div [style.font-size]="isSpecial ? 'x-large': 'smaller'">Font Size depends on isSpecial</div>

    <div [ngStyle]="currentStyles">This div is initially saveable and special</div>

    
    `
})

export class CSSStyleBindingExampleComponent{

    isSpecial:boolean = true;
    canSave:boolean = true;
    currentStyles = {};

    constructor(){
        this.setCurrentStyles();
    }

    setCurrentStyles(){
        this.currentStyles = {
            'font-style': this.canSave? 'italic' : 'normal',
            'font-size': this.isSpecial? '24px' : '12px'
        }
    }

}