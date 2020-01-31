import { Injectable } from "@angular/core";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class HttpPostService{

    constructor(public httpClient : HttpClient){
        console.log("Hello HttpPostService");
    }

    addUser(user): Observable <any>{
        return this.httpClient.post('https://jsonplaceholder.typicode.com/users', user).pipe(map(res => res));

    }
    
}
