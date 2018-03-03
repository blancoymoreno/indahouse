import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
//declaracion para usar jquery
declare var $:any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  //carga de servicio userservice
  providers: [UserService]
})
export class NavComponent implements OnInit {
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
   public onSubmit() {
     console.log(this.user);
     //conseguir los datos del usuario identificado
     this._userService.signup(this.user).subscribe(
       response => {
         let identity = response.user;
         this.identity = identity;
        if(!this.identity._id){
          alert('El usuario no está correctamente identificado');
        }else{
          // crear elemento en el localstorage para tener al usuario en sesion
          this._userService.signup(this.user, 'true').subscribe(
            response => {
              let token = response.token;
              this.token = token;
             if(this.token.length <= 0){
               alert('El token no se ha generado correctamente');
             }else{
              // crear elemento en el localstorage para tener el token disponible
                console.log(token);
                console.log(identity);
                $("#ingresarModal").modal("hide");
             }
            },
            error => {
               var errorMessage = <any>error;
     
               if(errorMessage != null){
                 var errorbody = JSON.parse(error._body);
                 this.errorMessage = errorbody.message;
                 console.log(error);
               }
            }
          );
        }
       },
       error => {
          var errorMessage = <any>error;

          if(errorMessage != null){
            var errorbody = JSON.parse(error._body);
            this.errorMessage = errorbody.message;
            console.log(error);
          }
       }
     );
  }
  ngOnInit() {

  }

}
