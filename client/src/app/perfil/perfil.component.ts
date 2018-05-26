import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../services/global';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { ServiceService } from '../services/service.service';
import { Service } from '../models/service';
import { ActionSequence } from 'selenium-webdriver';
//import { UserService } from '../shared/services/user.service';
//import { User } from '../shared/models/User';

@Component({
  selector: 'perfil-detail',
  templateUrl: './perfil.component.html',
  providers: [UserService, ServiceService]
})
export class PerfilComponent implements OnInit {
  public titulo: string;
  public user: User;
  public users: User[];
  public service: Service;
  public identity;
  public token;
  public url: string;
  public alertMessage;
  public proveedor: User;
  idUser: string;
  cantNotas = [{}, {}, {}, {}, {}, {}];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _serviceService: ServiceService
  ) {
    this.titulo = 'Detalle usuario';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    //this.user = this.identity;
    this.url = GLOBAL.url;
    // inicializar User
    this.proveedor = {
      _id:'',
      name: '',
      surname: '',
      email: '',
      password: '',
      role: '',
      image: '',
      mlastname: '',
      sexo: '',
      bday: '',
      mobile: '',
      estudios: '',
      region: '',
      cuidad: '',
      avdireccion: '',
      ndireccion: '',
      deptodireccion: '',
      pagoservicio: '',
      ofreservicio: '',
      categoriaServicio: '',
      presentacion: '',
      valoracionPromedio: 0,
      valoraciones: [{
        numEvaluacion: 0,
        comentario: '',
        idProvider: '',
        user: {
          name: '',
          surname: '',
          email: '',
          role: '',
          image: '',
          valoracionPromedio: 0,
          idService: ''
        }
      }],
      servicio: ''
    };
  }

  ngOnInit() {
    console.log('perfil.component.ts cargado');
    this.getUser();
    this.getService();
  }
  getService(){
    this._route.params.forEach((params: Params) => {
        let id = params['id'];
        this._serviceService.getService(this.token, id).subscribe(
            response =>{
                if(!response.service){
                    this._router.navigate(['/']);
                }else{
                    this.service = response.service;
                    console.log(this.service);
                    console.log(response.service);

                    //sacar los usuarios asociados al servicio
                    this._userService.getUsers(this.token, response.service._id).subscribe(
                        response => {
                           if(!response.users){
                                this.alertMessage = 'Este servicio no tiene usuarios';
                           }else{
                                this.users = response.users;
                           }
                        }
                        ,error => {
                            var errorMessage = <any>error;
                
                            if(errorMessage != null){
                              var errorbody = JSON.parse(error._body);
                             //this.alertMessage = errorbody.message;
                              console.log(error);
                            }
                        });
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
  getUser() {
    // Traer usuario según params,idUser
    this.idUser = this._route.snapshot.params.idUser;

    this._userService.getUser(this.token, this.idUser).subscribe(
      (userData) => {
          this.proveedor = userData;
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
