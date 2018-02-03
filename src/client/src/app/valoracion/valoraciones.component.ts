import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ValoracionesService} from '../shared/services/valoraciones.service';
import { Valoracion } from '../shared/models/Valoracion';

@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.component.html'
})
export class ValoracionesComponent implements OnInit {

  valoraciones: Valoracion[];
  idUser: String;

  constructor(
    private valoracionService: ValoracionesService,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {

    this.idUser = this.route.snapshot.params.idUser;
    console.log(this.idUser);
    this.valoracionService.getValoracionesByProvider(this.idUser)
    .subscribe(
      (valoraciones) => {
        this.valoraciones = valoraciones;
        console.log(this.valoraciones)
      },
      (error) => {
        console.log(error);
      }
  );
  }

}
