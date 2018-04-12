import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { ServiceService } from '../services/service.service';
import { Service } from '../models/service';

@Component({
    selector: 'service-detail',
    templateUrl: '../shared/layout/service-detail.html',
    providers: [UserService, ServiceService]
})

export class ServiceDetailComponent implements OnInit {
    public service: Service;
    public identity;
    public token;
    public url: string;
    public alertMessage;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _serviceService: ServiceService
    ){
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log('service-detail.component.ts cargado');
        //sacar servicio de la bbdd
        this.getService();
    }
    getService(){
        console.log('el metodo funciona')
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._serviceService.getService(this.token, id).subscribe(
                response =>{
                    if(!response.service){
                        this._router.navigate(['/']);
                    }else{
                        this.service = response.service;
                        console.log(this.service);
                        console.log(response.service);
                        /*console.log(response.category);
                        //sacar los servicios de la categoria
                        this._serviceService.getServices(this.token, response.category._id).subscribe(
                            response => {
                               if(!response.services){
                                    this.alertMessage = 'Esta categoria no tiene servicios';
                               }else{
                                    this.services = response.services;
                               }
                            }
                            ,error => {
                                var errorMessage = <any>error;
                    
                                if(errorMessage != null){
                                  var errorbody = JSON.parse(error._body);
                                 //this.alertMessage = errorbody.message;
                                  console.log(error);
                                }
                            });*/
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