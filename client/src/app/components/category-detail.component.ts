import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { UploadService } from '../services/upload.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
    selector: 'category-detail',
    templateUrl: '../shared/layout/category-detail.html',
    providers: [UserService, CategoryService]
})

export class CategoryDetailComponent implements OnInit {
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
                        //sacar los servicios de la categoria
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