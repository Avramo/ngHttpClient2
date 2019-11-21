import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  constructor() { }

  currentLocation: string = 'loginpage';
  
  changeLocation(newLocation:string):void{
    this.currentLocation = newLocation;
    console.log('LocationService changeLocation currentLocation=',this.currentLocation);
  }

}
