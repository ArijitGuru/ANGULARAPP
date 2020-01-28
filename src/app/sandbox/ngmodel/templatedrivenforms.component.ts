import { Component } from "@angular/core";

@Component({
    selector: 'templatedrivenforms',
    template: `
    
    <h1>Template Driven Form Example</h1>
    <form novalidate #f="ngForm" (ngSubmit)="onSubmit(f)">
        <div class="form-group">
            <label>Name</label>
            <input type="text" name="name" class="form-control"
            [(ngModel)]="user.name"
            #userName="ngModel"
            minlength="2"
            required
            >
        </div>
        
        <div *ngIf="userName.errors?.required && userName.touched" class ="alert alert-danger">Name is required.</div>

        <div *ngIf="userName.errors?.minlength && userName.touched" class="alert alert-danger">Name should be altleast 2 characters</div>

        <div class="form-group">
            <label>Email</label>
            <input type="text" name="email" class="form-control"
            [(ngModel)]="user.email"
            #userEmail="ngModel"
            required
            >
        </div>

        <div *ngIf="userEmail.errors?.required && userEmail.touched" class="alert alert-danger"> Email is required</div>


        <div class="form-group">
            <label>Phone</label>
            <input type="text" name="phone" class="form-control"
            [(ngModel)]="user.phone"
            #userPhone="ngModel"
            minlength="10"
            >
        </div>

        <div *ngIf="userPhone.errors?.minlength && userPhone.touched" class="alert alert-danger">Enter a valid phone number</div>

        <input type="submit" value="Submit" class="btn btn-success">
    </form>
    
    
    `


})

export class TemplateDrivenFormComponent{
    user = {
        name: '',
        email: '',
        phone: ''
    }

    onSubmit({value, valid}){
        console.log("Submit clicked");
        if(valid){
            console.log(value);
            console.log("Phone is..: "+ value.phone);
        }else{
            console.log("Form is invalid");
            
        }

    }

}