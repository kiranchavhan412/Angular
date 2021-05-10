import { Component } from '@angular/core';
import { UsersDataService} from './users-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';
  name = "";

  constructor(private user:UsersDataService){
    console.warn(this.user.getData())
    let data= this.user.getData();
    this.name=data.name;
  }
}
