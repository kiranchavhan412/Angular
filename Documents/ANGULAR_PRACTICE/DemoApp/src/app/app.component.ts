import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo';

  show = "yes"
  show1 = "green"
 
  color = "green"

  data=['pooja','kiran','kanchan','kajal']

  data1=[
    {
      name : "pooja",
      age : 22,
      email : "pooja@gmail.com"
    },
    {
      name : "Kiran",
      age : 22,
      email : "kiran@gmail.com"
    },
    {
      name : "Kanchan",
      age : 22,
      email : "kanchan@gmail.com"
    },
    {
      name : "kajal",
      age : 22,
      email : "kajal@gmail.com"
    }
  ]

  getValue(value: any){
    console.warn(value)
  }
  err = false

  color1 = "orange"

  updateColor(){
    this.color1 = "green"
  }

  yourName= "Pooja Patil"

  today = Date.now();

  str = "hello kiran"

  val = 10
}
