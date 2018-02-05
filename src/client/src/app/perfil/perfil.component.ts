import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/User';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html'
})
export class PerfilComponent implements OnInit {

  user: any;
  idUser: String;
  cantNotas = [{},{},{},{},{},{},{},{}];

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {

    this.idUser = this.route.snapshot.params.idUser;
    console.log(this.idUser);
    this.userService.getUser(this.idUser).subscribe(
      (userData) => {
        this.user = userData;
        // this.template();
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
