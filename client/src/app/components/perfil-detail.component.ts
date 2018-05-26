import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Message } from '../models/messages';
import { MessageService } from '../services/message.service';
import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { ServiceService } from '../services/service.service';
import { Service } from '../models/service';
import { User } from '../models/user';
declare var $:any;

@Component({
    selector: 'perfil-detail',
    templateUrl: '../shared/layout/perfil-detail.html',
    providers: [UserService, ServiceService, MessageService]
})

export class PerfilDetailComponent implements OnInit {
    public titulo: string;
    public message: Message;
    public status: string;
    public user: User;
    public service: Service;
    public users: User[];
    public identity;
    public token;
    public url: string;
    public alertMessage;
    public user_register: User;
    public errorMessage;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _messageService: MessageService,
        private _serviceService: ServiceService,
    ){
        this.titulo = 'Perfil detalle';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
        this.message = new Message('','','','',this.identity._id,'');
    }

    ngOnInit(){
        console.log('perfil-detail.component.ts cargado');
        //sacar servicio de la bbdd
        this.getUser();
    }
    
    /*onSubmit(){
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
    }*/
    onSubmit(form){
        console.log(this.user);
        this._messageService.addMessage(this.token, this.message).subscribe(
            response =>{
                if(response.message){
                    this.status = 'success';
                    form.reset();
                }
            },
            error => {
                this.status = 'error';
                console.log(<any>error);
            }
        );
    }
    getUser(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._userService.getUser(this.token, id).subscribe(
                response =>{
                    if(!response.user){
                        this._router.navigate(['/']);
                    }else{
                        this.user = response.user;
                        console.log(this.user);
                        console.log(response.user);

                        //sacar los servicios asociados al usuario
                        this._serviceService.getServices(this.token, response.user._id).subscribe(
                            response => {
                               if(!response.services){
                                    this.alertMessage = 'Este usuario no tiene servicios';
                               }else{
                                    this.users = response.users;
                               }
                            }
                            ,error => {
                                var errorMessage = <any>error;
                    
                                if(errorMessage != null){
                                  var errorbody = JSON.parse(error._body);
                                 //this.alertMessage = errorbody.message;
                                  console.log(error);
                                }
                            });
                        }
                },
                error => {
                    var errorMessage = <any>error;
        
                    if(errorMessage != null){
                      var errorbody = JSON.parse(error._body);
                     //this.alertMessage = errorbody.message;
                      console.log(error);
                    }
                }
            );

        });
    }
  
}