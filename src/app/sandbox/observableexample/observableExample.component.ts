import { ObservableExampleService } from './../services/observableexample.services';
import { Component } from "@angular/core";

@Component({
    selector:'observableexample',
    template:`

    <h1>Observable Example</h1>
    <ul class="list-group">
        <li class="list-group-item" *ngFor="let city of citylist">
        {{city}}
        </li>
    
    </ul>
    <br/>

    <h1>Printing Observables</h1>
    <ul class="list-group">
        <li class="list-group-item" *ngFor="let dt of data">
        {{dt}}
        </li>
    
    </ul>

    `
})

export class ObservableExampleComponent{

    citylist:string[] = [];
    data:any[] = [];
    constructor(public observableExampleService:ObservableExampleService){
        this.citylist = observableExampleService.getCities();

        this.observableExampleService.getData().subscribe(dataFromObservable => {
            console.log(dataFromObservable);
            this.data.push(dataFromObservable);
        });
    }



}