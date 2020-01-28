import { Component } from '@angular/core';

@Component({
    selector: 'datatype',
    template: `<h1> Hello {{ name }}, we are testing datatypes </h1>`

})

export class DatatypeComponent{

    name:string = 'Arijit Adhikary';
    age:number = 32;
    hasChildren:boolean = true;
    city:any = 'Boston';
    myNumberArray:number[] = [1,2,3];
    myStringsArray:string[] = ['hello', 'world'];
    myAnyArray:any[] = [,1,2, 'hello'];
    myTuple:[String, number] = ['hello', 12];
    unusualble:void = undefined;
    u:null = null;
    
    
    constructor(){
        this.hasChildren = false;
        
    }

}