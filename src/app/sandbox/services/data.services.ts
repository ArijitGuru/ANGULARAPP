import {Injectable} from '@angular/core';

@Injectable()
export class DataService{
    users:string[];

    constructor(){
        this.users = ['Arijit', 'Brandon', 'Robert', 'Sharad'];

    }

    getUsers(){
        return this.users;
    }
}