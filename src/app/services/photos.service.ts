import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(public http:HttpClient) { }

  

  allPhotosAPI:string = 'https://jsonplaceholder.typicode.com/photos/';

  getAllPhotos():Observable<Photo[]>{
    console.log('PhotosService getAllPhotos start' );
    return this.http.get<Photo[]>(this.allPhotosAPI)
  }

  getPhotos(id:number):Observable<Photo>{
    console.log('PhotosService getPhotos start' ); 
    return this.http.get<Photo>(this.allPhotosAPI +  id)
  }

}
