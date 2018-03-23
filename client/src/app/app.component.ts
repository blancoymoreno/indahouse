import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import{ GLOBAL } from './services/global';
//declaracion para usar jquery
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    //carga de servicio userservice
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'Indahouse';
  public user: User;
  public user_register: User;
  public identity;
  public errorMessage;
  public token;
  public alertRegister;
  public url;

  constructor(
    private _userService:UserService
  ){
  this.user = new User('','','', '', '', 'ROLE_USER', '');
  this.user_register = new User('','','', '', '', 'ROLE_USER', '');
  this.url = GLOBAL.url;
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
         
         localStorage.setItem('identity', JSON.stringify(identity));
         // crear token para enviarselo a cada petición HTTP
         this._userService.signup(this.user, 'true').subscribe(
           response => {
             let token = response.token;
             this.token = token;
            if(this.token.length <= 0){
              alert('El token no se ha generado correctamente');
            }else{
             // crear elemento en el localstorage para tener el token disponible
             localStorage.setItem('token', token);  
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

  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
  }
  onSubmitRegister(){
    console.log(this.user_register);

    this._userService.register(this.user_register).subscribe(
      response => {
        let user = response.user;
        this.user_register = user;

        if(!user._id){
          this.alertRegister = "Error al registrarse";
        }else{
          this.alertRegister = "El registro se ha realizado correctamente, ahora puedes logear con" + this.user_register.email;
          this.user_register = new User('','','', '', '', 'ROLE_USER', '');
        }
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
          var errorbody = JSON.parse(error._body);
          this.alertRegister = errorbody.message;
          console.log(error);
        }
      }
    )
  }
  ngOnInit() {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

    console.log(this.identity);
    console.log(this.token);
  }
} 
