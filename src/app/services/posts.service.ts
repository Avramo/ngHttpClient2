import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/post';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService{

  constructor(public http:HttpClient) { }

  

  allPostsAPI:string = 'https://jsonplaceholder.typicode.com/posts/';

  getAllPosts():Observable<Post[]>{
    console.log('PostsService getAllPosts start' );
    return this.http.get<Post[]>(this.allPostsAPI)
  }

  getPosts(id:number):Observable<Post>{
    console.log('PostsService getPosts start' ); 
    return this.http.get<Post>(this.allPostsAPI +  id)
  }

}
