import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http:HttpClient) { }

  

  allusersAPI:string = 'https://jsonplaceholder.typicode.com/users/';

  getAllUsers():Observable<User[]>{
    console.log('UsersService getAllUsers start' );
    return this.http.get<User[]>(this.allusersAPI)
  }

  getUser(id:number):Observable<User>{
    console.log('UsersService getAllUsers start' ); 
    return this.http.get<User>(this.allusersAPI +  id)
  }

}
