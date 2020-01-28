import { Component } from "@angular/core";

@Component({
    selector: 'propertyBinding',
    template: `
    
    <h1>3 ways of property binding</h1>

    <h2>Example 1</h2>
    <div> <img src="{{ imageUrl }}"></div>
    <h2>Example 2</h2>
    <div><img [src]="imageUrl"> </div>
    <h2>Example 3</h2>
    <div><img bind-src="imageUrl"></div>

    <h4>Image location : <span [textContent]="imageUrl"></span></h4>
    
    <hr/>
    <h2>Create Post</h2>
    <p [hidden]="isUnChanged">Post has been changed, please save.</p>
    <button [disabled]="isUnChanged">Save</button>

    
    `
})

export class PropertyBindingExample {
    imageUrl:string = 'http://lorempixel.com/400/200';
    isUnChanged:boolean = true;
}