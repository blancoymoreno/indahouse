import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  user: User;
  idUser: String;
  cantNotas = [{}, {}, {}, {}, {}, {}, {}, {}];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) {

    // inicializar User
    this.user = {
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
        valoracionPromedio: 0,
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

  ngOnInit() {

    // Traer usuario según params,idUser
    this.idUser = this.route.snapshot.params.idUser;

    this.userService.getUser(this.idUser).subscribe(
      (userData) => {
        this.user = userData;
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
