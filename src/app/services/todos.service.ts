import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(public http:HttpClient) { }

  

  allTodosAPI:string = 'https://jsonplaceholder.typicode.com/todos/';

  getAllTodos():Observable<Todo[]>{
    console.log('TodosService getAllTodos start' );
    return this.http.get<Todo[]>(this.allTodosAPI)
  }

  getTodos(id:number):Observable<Todo>{
    console.log('TodosService getTodos start' ); 
    return this.http.get<Todo>(this.allTodosAPI +  id)
  }

}
