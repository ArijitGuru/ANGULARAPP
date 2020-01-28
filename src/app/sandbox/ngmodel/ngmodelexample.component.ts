import { Component } from "@angular/core";

@Component({
    selector: 'ngmodelexample',
    template: `
        <h1>ngModel examples</h1>
        <div class="container">
            <form>
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

            <h4>Name : {{ name}}</h4>
            <h4>Age : {{ age }}</h4>
        </div>
    
    `
})

export class NgModelExampleComponent{
    name:string = 'Enter Name here';
    age:number = 0;
}