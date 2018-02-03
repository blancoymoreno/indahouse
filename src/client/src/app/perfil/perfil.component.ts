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

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
  ) { }


  ngOnInit() {

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
