import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
@Component({
  selector: 'logged-nav',
  templateUrl: './logged-nav.component.html',
  //carga de servicio userservice
  providers: [UserService]
})
export class LoggedNavComponent implements OnInit {
  title = 'Indahouse';
  public user: User;
  public identity;
  public errorMessage;
  public token;
  constructor(
    private _userService:UserService
  ) { 
    this.user = new User('','','', '', '', 'ROLE_USER', '');
  }
logout(){
  localStorage.removeItem('identity');
  localStorage.removeItem('token');
  localStorage.clear();
  this.identity = null;
  this.token = null;
}
  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

}
