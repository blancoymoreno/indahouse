import { Component, OnInit } from '@angular/core';
import {Valoracion} from '../shared/models/Valoracion';
import {ValoracionesService} from '../shared/services/valoraciones.service';

@Component({
  selector: 'app-evaluar',
  templateUrl: './evaluar.component.html'
})
export class EvaluarComponent implements OnInit {

  valoracion: Valoracion;

  constructor(
    private valoracionService: ValoracionesService,
  ) { }

  mouseEnterStar(event, num) {
    const numNota = num;
    const clase: string = event.target.className;
    if (clase.indexOf('glyphicon-star') >= 0 ) {
      const array = document.getElementById('notas').children;
      for (let i = 1; i < (array.length + 1); i++) {
        if (i <= numNota) {
          array[i - 1].className = 'glyphicon glyphicon-star cursor-pointer nota';
        }else {
          array[i - 1].className = 'glyphicon glyphicon-star-empty cursor-pointer nota';
        }
      }
    }
  }

  mouseOverStar(event, num) {
    const numNota = num;
    const clase = event.target.className;
    if (clase.indexOf('glyphicon-star') >= 0 ) {
      const array =  document.getElementById('notas').children;
      for (let i = 1; i < (array.length + 1); i++) {
        if (i > numNota) {
          array[i - 1].className = 'glyphicon glyphicon-star-empty cursor-pointer nota';
        }else {
          array[i - 1].className = 'glyphicon glyphicon-star cursor-pointer nota';
        }
      }
      // paso la nota a input
      event.path[2].children[2].value = numNota;
    }
  }

  addValoracion(event) {
    // const newValoracion:  Valoracion = {

    // };
  }

  ngOnInit() {
  }

}
