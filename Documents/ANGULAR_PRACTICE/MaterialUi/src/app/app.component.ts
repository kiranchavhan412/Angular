import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MaterialUi';

 
  users = [
    {
      name : 'Pooja',
      age : 22
    },
    {
      name : 'Kiran',
      age : 26
    },
    {
      name : 'Kajal',
      age : 28
    }
  ]

  parentComponent(data){
    console.warn(data)
  }
}
