import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import{ GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
//declaracion para usar jquery
declare var $:any;
@Component({
    selector: 'configurar-perfil-menu',
    templateUrl: '../shared/layout/configurar-perfil-menu.html',
    providers: [UserService]
})

export class ConfigurarPerfilMenuComponent implements OnInit{
    public titulo: string;
    public user:User;
    public identity;
    public token;
    public alertMessage;
    public url:string;
    constructor(
        private _userService: UserService
    ){
        this.titulo = 'Actualizar mis datos';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
    }
    ngOnInit(){
        console.log('user-edit.component.ts cargado')
       
    }
}