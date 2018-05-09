import { Component, OnInit } from '@angular/core';
import{ GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
    selector: 'ofrece-servicios',
    templateUrl: '../../shared/layout/landing/ofrece-servicios.html',
})

export class OfreceServiciosComponent implements OnInit {
    public titulo: string;
    public user:User;
    public identity;
    public token;
    public alertMessage;
    public url:string;
    constructor(
        private _userService: UserService
    ){
        this.titulo = 'Ofrece un servicio a domicilio';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
    }

    ngOnInit(){
        console.log('ofreceServicios.component.ts cargado');
        //Conseguir listado de categorias
    }
}