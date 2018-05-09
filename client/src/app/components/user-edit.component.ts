import { Component, OnInit } from '@angular/core';
import{ GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
//declaracion para usar jquery
declare var $:any;
@Component({
    selector: 'user-edit',
    templateUrl: '../shared/layout/user-edit.html',
    providers: [UserService]
})

export class UserEditComponent implements OnInit{
    public titulo: string;
    public user:User;
    public identity;
    public token;
    public alertMessage;
    public url:string;
    constructor(
        private _userService: UserService
    ){
        this.titulo = 'Datos personales';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
    }
    ngOnInit(){
        console.log('user-edit.component.ts cargado')
       
    }
    onSubmit(){
        console.log(this.user);
        this._userService.updateUser(this.user).subscribe(
            response => {
                if(!response.user){
                    this.alertMessage = "El usuario no se ha actualizado";
                }else{
                      //this.user = response.user;
                      localStorage.setItem('identity', JSON.stringify(this.user));
                      $('#nombre-usuario').text(this.user.name);
                     
            
                    this.alertMessage = "Los datos han sido atualizados correctamente";
                }
            },
            error => {
                var errorMessage = <any>error;
      
                if(errorMessage != null){
                  var errorbody = JSON.parse(error._body);
                  this.alertMessage = errorbody.message;
                  console.log(error);
                }
             }
        );
    }
 
}