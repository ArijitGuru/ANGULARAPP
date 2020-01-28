import { Component } from "@angular/core";

@Component({
    selector: 'pipes',
    template: `
    
    <h1>Angular Pipes Example</h1>
    
    <p> My birthday is {{ birthday | date }} </p>

    <p> My birthday is {{ birthday | date:"MM-dd-yyyy" }} </p>

    <p> I was born in {{ birthday | date: "yyyy" }}</p>

    <p> I love {{ 'cakes' | uppercase }}</p>

    <p> I hate {{ 'CATS' | lowercase }}</p>

    <p> Your Total is {{ total | currency }}</p>
    <p> Your Total is {{ total | currency:"INR" }}</p>
    <p> Your Total is {{ total | currency:"INR":"1" }}</p>
    
    <p> Our fee is {{ fee | percent }}</p>
    
    `
})

export class pipesExampleComponent{

    birthday = new Date(1988, 10, 15);
    total = 500;
    fee = 1;


}