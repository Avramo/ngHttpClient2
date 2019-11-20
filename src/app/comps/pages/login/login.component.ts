import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public locationSVC:LocationService) { }

  ngOnInit() {
  }

  login(){
    this.locationSVC.currentLocation = 'homepage';
  }

}
