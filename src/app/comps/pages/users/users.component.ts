import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public usersSVC:UsersService) { }

  allUsersArray:User[] = [];
  currentUser:User = null;

  ngOnInit() {
    console.log('userComp ngoninit');

    this.usersSVC.getAllUsers()
    .subscribe(allUserData => {
      this.allUsersArray = allUserData})
      
      console.log('userComp ngoninit allUsersArray=',this.allUsersArray);
      
  }
  


}
