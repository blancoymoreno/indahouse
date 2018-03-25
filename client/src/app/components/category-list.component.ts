import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { Category } from '../models/category';
import { RootRenderer } from '@angular/core/src/render/api';

@Component({
    selector: 'category-list',
    templateUrl: '../shared/layout/category-list.html',
    providers: [UserService]
})

export class CategoryListComponent implements OnInit {
    public titulo: string;
    public categories: Category[];
    public identity;
    public token;
    public url: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ){
        this.titulo = "Categorías";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log('category-list.component.ts cargado');
        //Conseguir listado de categorias
    }
}