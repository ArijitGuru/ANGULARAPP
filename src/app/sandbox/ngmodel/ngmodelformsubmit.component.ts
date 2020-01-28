import { Component } from "@angular/core";

@Component({
    selector: 'ngmodelexamplewithformsubmit',
    template: `
        <h1>ngModel examples</h1>
        <div class="container">
            <form (submit)="onSubmit()">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" [(ngModel)]="name" name="name" class="form-control">
                </div>
                <div class="form-group">
                    <label>Age</label>
                    <input type="number" [(ngModel)]="age" name="age" class="form-control">
                </div>
                <input type="submit" value="submit" class="btn btn-success">
            
            </form>

            <br/>
            <br/>
            <ul class="list-group">
                <li class="list-group-item" *ngFor="let user of users">{{ user}}
                </li>
            </ul>

        </div>
    
    `
})

export class NgModelFormSubmitExampleComponent{
    name:string = '';
    age:number = 0;
    users:string[] = ['Arijit','Indranil','Debanjan'];

    onSubmit(){
        console.log(this.name);
        this.users.push(this.name);
        this.name = ''; //clear the input text field
    }
}