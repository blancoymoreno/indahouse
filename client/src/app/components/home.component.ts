import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'home',
    templateUrl: '../shared/layout/home.html',
})

export class HomeComponent implements OnInit {
    public titulo: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
    ){
        this.titulo = "Bienvenido";
    }

    ngOnInit(){
        console.log('home.component.ts cargado');
        //Conseguir listado de categorias
    }
}