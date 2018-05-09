import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { CategoryService } from '../services/category.service';
import { ServiceService } from '../services/service.service';
import { Category } from '../models/category';
import { Service } from '../models/service';
import { CategoryListComponent} from './category-list.component';

@Component({
    selector: 'service-add',
    templateUrl: '../shared/layout/service-add.html',
    providers: [UserService, CategoryService, ServiceService]
})

export class ServiceAddComponent implements OnInit {
    public titulo: string;
    public category: Category;
    public categories: Category[];
    public service: Service;
    public identity;
    public token;
    public url: string;
    public alertMessage;
    public next_page;
    public prev_page;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _serviceService: ServiceService,
        private _categoryService: CategoryService
    ){
        this.titulo = "Crear Servicio";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.service = new Service('','','','');
    }

    ngOnInit(){
        console.log('service-add.component.ts cargado');
        this.getCategories();
    }
    getCategories(){
        this._route.params.forEach((params: Params) =>{
            let page = +params['page'];
            if(!page){
                page = 1;
            }else{
                this.next_page = page+1;
                this.prev_page = page-1;

                if(this.prev_page == 0){
                    this.prev_page = 1;
                }
            }
            //obtener categorias con token, desde el servicio
            this._categoryService.getCategories(this.token, page).subscribe(
                response =>{
                    if(!response.categories){
                        this._router.navigate(['/']);
                    }else{
                        this.categories = response.categories;
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
            //obtener categorias sin token, desde el servicio
            /*this._categoryService.getCategories(page).subscribe(
                response =>{
                    if(!response.categories){
                        this._router.navigate(['/']);
                    }else{
                        this.categories = response.categories;
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
            );*/
        });
    }
    onSubmit(){
        this._route.params.forEach((params: Params) => {
            let category_id = params['category'];
            this.service.category = category_id;

            this._serviceService.addService(this.token, this.service).subscribe(
                response => {
                    if(!response.service){
                        this.alertMessage = 'Error en el servidor';
                    }else{
                        this.alertMessage = 'El servicio se ha creado correctamente';
                        this.service = response.service;
                        this._router.navigate(['/editar-servicio', response.service._id]);
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
}