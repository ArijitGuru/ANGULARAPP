import { Component } from "@angular/core";
import { HttpGetService } from '../services/httpget.services';

@Component({
    selector:'httpgetexample',
    template:`
    <h1>Hello World</h1>

    <div *ngFor="let user of users">
        <div class="well">
            <ul class="list-group">
                <li class="list-group-item"> Name: {{ user.name }}</li>
                <li class="list-group-item"> Email: {{ user.email }}</li>
                <li class="list-group-item"> Phone: {{ user.phone }}</li>
                <br/>
            </ul>

        </div>
    </div>

    `
})

export class HttpGetExampleComponent{
    users:any[];

    constructor(public httpgetService: HttpGetService){
        this.httpgetService.getUsers().subscribe(users => {
            console.log(users);
            this.users = users;
        })   
    }
}