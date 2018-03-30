import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { RootRenderer } from '@angular/core/src/render/api';

@Component({
    selector: 'category-add',
    templateUrl: '../shared/layout/category-add.html',
    providers: [UserService, CategoryService]
})

export class CategoryAddComponent implements OnInit {
    public titulo: string;
    public category: Category;
    public identity;
    public token;
    public url: string;
    public alertMessage;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _categoryService: CategoryService
    ){
        this.titulo = "Crear nueva categoría";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.category = new Category('','','');
    }

    ngOnInit(){
        console.log('category-add.component.ts cargado');
    }
    onSubmit(){
        console.log(this.category);
        this._categoryService.addCategory(this.token, this.category).subscribe(
            response => {
                if(!response.category){
                    this.alertMessage = 'Error en el servidor';
                }else{
                    this.alertMessage = 'la categoría se ha creado correctamente';
                    this.category = response.category;
                    this._router.navigate(['/editar-categoria', response.category._id]);
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