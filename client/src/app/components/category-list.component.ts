import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { CategoryService } from '../services/category.service';
import { Category } from '../models/category';

@Component({
    selector: 'category-list',
    templateUrl: '../shared/layout/category-list.html',
    providers: [UserService, CategoryService]
})

export class CategoryListComponent implements OnInit {
    public titulo: string;
    public subtitulo: string;
    public categories: Category[];
    public identity;
    public token;
    public url: string;
    public pages;
    public total;
    public page;
    public next_page;
    public prev_page;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _categoryService: CategoryService,
        private _userService: UserService
    ){
        this.titulo = "Categorías de servicios";
        this.subtitulo = "Categorías de servicios";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log('category-list.component.ts cargado');
        //Conseguir listado de categorias
        this.actualPage();
    }

    getCategories(page){
        //obtener categorias con token desde el servicio
        this._categoryService.getCategories(this.token, page).subscribe(
            response =>{
                if(!response.categories){
                    this._router.navigate(['/']);
                } else{
                    this.categories = response.categories;
                    this.total = response.total;
                    this.pages = response.pages;
                    if(page > this.pages){
                        this._router.navigate(['/categorias/1']);

                    }
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
    }
    actualPage(){
        this._route.params.subscribe(params => {
            let page = +params['page'];
            this.page = page;
            if(!params['page']){
                page = 1;
            }
            if(!page){
                page = 1;
            }else{
                this.next_page = page+1;
                this.prev_page = page-1;

                if(this.prev_page <= 0){
                    this.prev_page = 1;
                }
            }
            this.getCategories(this.page);
        });
    }
    public confirmado;
    onDeleteConfirm(id){
        this.confirmado = id;
    }
    onCancelCategory(){
        this.confirmado = null;
    }
    onDeleteCategory(id){
        this._categoryService.deleteCategory(this.token, id).subscribe(
            response =>{
                if(!response.category){
                    //alert('error en el servidor');
                    console.log(response);
                }
                this.getCategories(this.page);
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
    }
}