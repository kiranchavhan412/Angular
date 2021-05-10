import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appName = 'MyApp';
  name = 'Kiran Chavhan';

  yourName="Kirannnn"

  getFullName(surname: any){
    alert(surname)
  }

  //declaring function
  getName(){
    return this.name;
  }

  //declaring object
  obj = {
    name : "Kirti",
    age : 22
  }

  //declaring array
  arr=['kiran','pooja','kirti']

  siteUrl= window.location.href;

  myEvt(evt: any){
    console.warn(evt)
  }
disabledBox=true
enableBox(){
  this.disabledBox=false
}
  myname = "Kiran Chavhan"

}
