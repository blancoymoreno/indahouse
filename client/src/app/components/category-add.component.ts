import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { Category } from '../models/category';
import { RootRenderer } from '@angular/core/src/render/api';

@Component({
    selector: 'category-add',
    templateUrl: '../shared/layout/category-add.html',
    providers: [UserService]
})

export class CategoryAddComponent implements OnInit {
    public titulo: string;
    public category: Category;
    public identity;
    public token;
    public url: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService
    ){
        this.titulo = "Crear nueva categoría";
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.category = new Category('','','');
    }

    ngOnInit(){
        console.log('category-add.component.ts cargado');
        //Conseguir listado de categorias
    }
}