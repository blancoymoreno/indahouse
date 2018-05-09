import { Component, OnInit } from '@angular/core';
import{ GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';


@Component({
    selector: 'buscar-servicio',
    templateUrl: '../../shared/layout/landing/buscar-servicio.html',
})

export class BuscarServicioComponent implements OnInit {
    public titulo: string;
    public user:User;
    public identity;
    public token;
    public alertMessage;
    public url:string;
    constructor(
        private _userService: UserService
    ){
        this.titulo = '¿Buscas un servicio a domicilio?';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.user = this.identity;
        this.url = GLOBAL.url;
    }


    ngOnInit(){
        console.log('buscarServicio.component.ts cargado');
        //Conseguir listado de categorias
    }
}