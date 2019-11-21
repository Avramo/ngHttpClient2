import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../models/album';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(public http:HttpClient) { }

  

  allAlbumsAPI:string = 'https://jsonplaceholder.typicode.com/albums/';

  getAllAlbums():Observable<Album[]>{
    console.log('Albums.Service getAllAlbums start' );
    return this.http.get<Album[]>(this.allAlbumsAPI)
  }

  getAlbums(id:number):Observable<Album>{
    console.log('Albums.Service getAlbums start' ); 
    return this.http.get<Album>(this.allAlbumsAPI +  id)
  }

}
