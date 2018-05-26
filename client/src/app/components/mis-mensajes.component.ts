import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { ServiceService } from '../services/service.service';
import { Service } from '../models/service';
import { User } from '../models/user';
declare var $:any;

@Component({
    selector: 'mis-mensajes',
    templateUrl: '../shared/layout/mis-mensajes.html',
    providers: [UserService, ServiceService]
})

export class MisMensajesComponent implements OnInit {
    public titulo: string;
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
        private _serviceService: ServiceService,
    ){
        this.titulo = 'Mis mensajes';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log('mis-mensajes.component.ts cargado');
        //sacar servicio de la bbdd
        //this.getUser();
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