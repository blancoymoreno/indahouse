import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';
import { RootRenderer } from '@angular/core/src/render/api';

@Component({
    selector: 'category-list',
    templateUrl: '../shared/layout/category-list.html',
    providers: [UserService, CategoryService]
})

export class CategoryListComponent implements OnInit {
    public titulo: string;
    public categories: Category[];
    public identity;
    public token;
    public url: string;
    public next_page;
    public prev_page;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _categoryService: CategoryService,
        private _userService: UserService
    ){
        this.titulo = "Categorías";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.next_page = 1;
        this.prev_page = 1;
    }

    ngOnInit(){
        console.log('category-list.component.ts cargado');
        //Conseguir listado de categorias
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
        });
    }
}