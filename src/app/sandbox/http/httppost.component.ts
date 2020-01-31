import { HttpPostService } from './../services/httppost.services';
import { Component } from "@angular/core";

@Component({
    selector:'httppostexample',
    template:`
        <h1> Http Post example</h1>

        <form (submit)="onSubmit()">
            <div class="form-group">
                <label>Name</label>
                <input type="text" class="form-control" [(ngModel)]="user.name" name="name">
            </div>

            <div class="form-group">
                <label>Email</label>
                <input type="text" class="form-control" [(ngModel)]="user.email" name="email">
            </div>

            <div class="form-group">
                <label>Phone</label>
                <input type="text" class="form-control" [(ngModel)]="user.phone" name="phone">
            </div>

            <div class="form-group">
                <input type="submit" class="btn btn-success" value="Submit">
            </div>    
        </form>

        <br/>

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

export class HttppostComponent{
    users:any[] = [];
    user = {
        name:'',
        email:'',
        phone:''

    }

    constructor(public httpPostService: HttpPostService ){

        console.log("Hello HttppostComponent");
    }

    onSubmit(){
        this.httpPostService.addUser(this.user).subscribe(user => {
            console.log(user);
            this.users.unshift(user);
        });
    }

}