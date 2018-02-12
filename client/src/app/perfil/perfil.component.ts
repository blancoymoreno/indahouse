import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  public proveedor: User;
  idUser: string;
  cantNotas = [{}, {}, {}, {}, {}, {}];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {

    // inicializar User
    this.proveedor = {
      name: '',
      surname: '',
      email: '',
      password: '',
      role: '',
      image: '',
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
      idService: ''
    };
  }

  getUser() {
    // Traer usuario según params,idUser
    this.idUser = this.route.snapshot.params.idUser;

    this.userService.getUser(this.idUser).subscribe(
      (userData) => {
          this.proveedor = userData;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.getUser();
  }


}
