import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { UploadService } from '../services/upload.service';
import { ServiceService } from '../services/service.service';
import { Category } from '../models/category';
import { Service } from '../models/service';

@Component({
    selector: 'service-edit',
    templateUrl: '../shared/layout/service-add.html',
    providers: [UserService, ServiceService, UploadService]
})

export class ServiceEditComponent implements OnInit {
    public titulo: string;
    public service: Service;
    public identity;
    public token;
    public url: string;
    public alertMessage;
    public is_edit;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _uploadService: UploadService,
        private _serviceService: ServiceService
    ){
        this.titulo = "Editar servicio";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.service = new Service('','','','');
        this.is_edit = true;
    }

    ngOnInit(){
        console.log('service-edit.component.ts cargado');

        // Conseguir el servicio
        this.getService();
    }
    getService(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._serviceService.getService(this.token, id).subscribe(
                response => {
                    if(!response.service){
                        //this.alertMessage = 'Error en el servidor';
                        this._router.navigate(['/']);
                    }else{
                        this.service = response.service;
                    }
                },
                error => {
                    var errorMessage = <any>error;
        
                    if(errorMessage != null){
                      var errorbody = JSON.parse(error._body);
                      console.log(error);
                    }
                } 
            );
        });
    }
    onSubmit(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
          
            this._serviceService.editService(this.token, id, this.service).subscribe(
                response => {
                    if(!response.service){
                        this.alertMessage = 'Error en el servidor';
                    }else{
                        this.alertMessage = 'El servicio se ha actualizado correctamente';
                        if(!this.filesToUpload){
                            this._router.navigate(['/categoria', response.service.category]);
                        }else{
                            //Subir la imagen del servicio
                            this._uploadService.makeFileRequest(this.url+'upload-image-service/'+id, [], this.filesToUpload, this.token, 'image')
                            .then(
                                (result) => {
                                    this._router.navigate(['/categoria', response.service.category]);
                                },
                                (error) => {
                                    console.log(error);
                                }
                            );
                        }
                   
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
            )
        });

    }
    public filesToUpload: Array<File>;
    fileChangeEvent(fileInput: any){
        this.filesToUpload = <Array<File>>fileInput.target.files;
    }
}