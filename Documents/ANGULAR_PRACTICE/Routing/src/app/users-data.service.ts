import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor() { }
  getData(){
    return{
      name : "kiran",
      age : 22,
      
    }
  }
}
