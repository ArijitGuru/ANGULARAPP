import { Component } from "@angular/core";
import { DataService } from '../../sandbox/services/data.services'

@Component({
    selector: 'servicetesting',
    template:`

    <h1>Service Component testing Example</h1>
    <br/>
    <ul class="list-group">
        <li class="list-group-item" *ngFor="let user of users">{{ user }}</li>
    </ul>
    
    `



})

export class ServiceTestingComponent{
    users:string[];
    constructor(public dataService:DataService){
       this.users = this.dataService.getUsers();
    }
    

}