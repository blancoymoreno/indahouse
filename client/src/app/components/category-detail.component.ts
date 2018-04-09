import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { UploadService } from '../services/upload.service';
import { CategoryService } from '../services/category.service';
import { ServiceService } from '../services/service.service';
import { Category } from '../models/category';
import { Service } from '../models/service';

@Component({
    selector: 'category-detail',
    templateUrl: '../shared/layout/category-detail.html',
    providers: [UserService, CategoryService, ServiceService]
})

export class CategoryDetailComponent implements OnInit {
    public category: Category;
    public services: Service[];
    public identity;
    public token;
    public url: string;
    public alertMessage;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _categoryService: CategoryService,
        private _serviceService: ServiceService
    ){
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log('category-edit.component.ts cargado');
        //llamar al método del api para sacar una categoría en base a su id getCategory
        this.getCategory();
    }
    getCategory(){
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._categoryService.getCategory(this.token, id).subscribe(
                response =>{
                    if(!response.category){
                        this._router.navigate(['/']);
                    }else{
                        this.category = response.category;
                        console.log(response.category);
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
    public confirmado;
    onDeleteConfirm(id){
        this.confirmado = id;
    }

    onCancelService(){
        this.confirmado = null;
    }
    onDeleteService(id){
        this._serviceService.deleteService(this.token, id).subscribe(
            response => {
               if(!response.service){
                   alert('error en el servidor')
               }
               this.getCategory();
            },
            error => {
                var errorMessage = <any>error;
    
                if(errorMessage != null){
                  var errorbody = JSON.parse(error._body);
                 //this.alertMessage = errorbody.message;
                  console.log(error);
                }
            }
        )
    }
}