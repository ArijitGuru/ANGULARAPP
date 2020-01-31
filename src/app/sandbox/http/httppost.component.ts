import { HttpPostService } from './../services/httppost.services';
import { Component } from "@angular/core";

@Component({
    selector:'httppostexample',
    template:`
        <h1> Http Post example</h1>

        <form (submit)="onSubmit(isEdit)">
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

            <button class="btn btn-primary btn-sm" (click)="onEditClick(user)">Edit</button>
            <button class="btn btn-danger btn-sm" (click)="onDeleteClick(user.id)">Delete</button>
            <br/>
            <br/>
        </div>
    </div>

    `



})

export class HttppostComponent{
    users:any[] = [];
    user = {
        name:'',
        email:'',
        phone:'',
        id: ''

    }

    isEdit: boolean = false;

    constructor(public httpPostService: HttpPostService ){

        console.log("Hello HttppostComponent");
    }

    onSubmit(isEdit){

        if (isEdit){
            this.httpPostService.updateUser(this.user).subscribe(user => {
                for (let i = 0; i < this.users.length; i++){
                    if(this.users[i].id == this.user.id){    
                        console.log(this.user);   
                        this.users.splice(i, 1);
                    }
                }
                this.users.unshift(this.user);
            });
        }else{
            this.httpPostService.addUser(this.user).subscribe(user => {
                console.log(user);
                this.users.unshift(user);
            });
        }

        
    }

    onDeleteClick(id){
        this.httpPostService.deleteUser(id).subscribe(res => {
            console.log(id);
            for (let i = 0; i < this.users.length; i++){
                if(this.users[i].id == id){
                    this.users.splice(i, 1);
                }
            }
        });
    }

    onEditClick(user){
        this.isEdit = true;
        this.user = user;
    }



}