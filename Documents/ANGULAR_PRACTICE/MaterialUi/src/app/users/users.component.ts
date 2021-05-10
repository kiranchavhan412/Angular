import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Output() parentComponent:EventEmitter<any>= new EventEmitter();

  @Input() hero1;
  

  constructor() { }

  ngOnInit(): void {
    this.parentComponent.emit({name : 'kiran', age : '22'})
  }

}
