import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class ObservableExampleService{
    cities:string[] = ['Charlotte','Mumbai','Kolkata'];

    data: Observable<Array<number>>;
    getCities(){
        return this.cities;
    }

    getData(){
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next([1]);
            }, 1000);

            setTimeout(()=>{
                observer.next([2]);
            }, 2000);

            setTimeout(()=>{
                observer.next([3]);
            }, 3000);

            setTimeout(()=>{
                observer.next([4]);
            }, 4000);

            setTimeout(()=>{
                observer.complete();
            }, 5000);
        });

        return this.data;
    }
}