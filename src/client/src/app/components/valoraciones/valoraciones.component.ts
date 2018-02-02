import { Component, OnInit } from '@angular/core';
import {ValoracionesService} from '../../services/valoraciones.service';
import { Valoracion } from '../../Valoracion';

@Component({
  selector: 'app-valoraciones',
  templateUrl: './valoraciones.component.html',
  styleUrls: ['./valoraciones.component.css']
})
export class ValoracionesComponent implements OnInit {

  valoraciones: Valoracion[];

  constructor(private valoracionService: ValoracionesService) {
    console.log('shsjs');
    this.valoracionService.getValoraciones()
      .subscribe(
        (valoraciones) => {
          this.valoraciones = valoraciones;
        },
        (error) => {
          console.log(error);
        }
    );
  }

  ngOnInit() {
  }

}
