import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = '';
  password:string = '';

  constructor(public locationSVC:LocationService) { }

  ngOnInit() {
  }

  login(){
    // let nameField = 'username'
    // this[nameField];
    // this['username'];
    //test logic
    console.log('login', this['username'], this['password']);

    // this.serverLogin(this['username'], this['password'])
    // .subscribe(result => this)
    this.locationSVC.currentLocation = 'homepage';
  }

  serverLogin(user:string, pass:string):Observable<number>{
    return timer(1250);
  }

}
