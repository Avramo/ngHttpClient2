import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { PhotosService } from 'src/app/services/photos.service';
import { PostsService } from 'src/app/services/posts.service';
import { Photo } from 'src/app/models/photo';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public locationSVC:LocationService, public photosSVC:PhotosService,public postsSVC:PostsService) { }

  lastPhotos:Photo[] = [];
  lastPosts:Post[] = [];

  ngOnInit() {
    
  }

}
