import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '@angular/compiler';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentsService{

  constructor(public http:HttpClient) { }

  

  allCommentsAPI:string = 'https://jsonplaceholder.typicode.com/comments/';

  getAllComments():Observable<Comment[]>{
    console.log('CommentsService getAllComments start' );
    return this.http.get<Comment[]>(this.allCommentsAPI)
  }

  getComments(id:number):Observable<Comment>{
    console.log('CommentsService getComments start' ); 
    return this.http.get<Comment>(this.allCommentsAPI +  id)
  }

}
