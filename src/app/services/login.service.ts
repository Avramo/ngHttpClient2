import { Injectable } from '@angular/core';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public locationSVC:LocationService) { }
}
