import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { AdminListComponent } from './admin-list/admin-list.component';
import { UserListComponent } from './user-list/user-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LazyLoading';
  constructor(private viewContainer:ViewContainerRef, private cfr:ComponentFactoryResolver){}
  async adminLogin(){
    this.viewContainer.clear();
    const adminList=await import('./admin-list/admin-list.component');
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(AdminListComponent)
    )

  }
  async userLogin(){
    this.viewContainer.clear();
    const userList=await import('./user-list/user-list.component');
    this.viewContainer.createComponent(
      this.cfr.resolveComponentFactory(UserListComponent)
    )

  }
}
