import { Component } from '@angular/core';


@Component ({
    selector: 'objectninterface',
    template: `<h1> Hello , we are testing custom Objects and Interfaces </h1>`

})

export class ObjectnInterfaceComponent{
    customer:Customer;

    constructor(){
        this.customer = {
            id:1,
            name:'John Doe',
            email:'john@gmail.com'
        }
    }

}

interface Customer {
    id:number;
    name:string;
    email:string;

}