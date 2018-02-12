import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent implements OnInit{
  public title = 'Indahouse';
  public user: User;
  public identity;
  public token;

  constructor(
    private _userService:UserService
  ){
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
  }
  ngOnInit(){

  }
  public onSubmit(){
    console.log(this.user);
  }
}
