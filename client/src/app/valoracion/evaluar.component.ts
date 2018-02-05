import { Component, OnInit, Input } from '@angular/core';
import { Valoracion } from '../shared/models/Valoracion';
import { ValoracionesService } from '../shared/services/valoraciones.service';

@Component({
  selector: 'app-evaluar',
  templateUrl: './evaluar.component.html'
})
export class EvaluarComponent implements OnInit {

  valoracion: Valoracion;
  title: String = 'Holanda, que talca';
  @Input() user: any;

  constructor(
    private valoracionService: ValoracionesService,
  ) {

    // inicializar Valoracion
    this.valoracion = {
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
    };

  }

  mouseEnterStar(event, num) {
    const numNota = num;
    const clase: string = event.target.className;
    if (clase.indexOf('glyphicon-star') >= 0) {
      const array = document.getElementById('notas').children;
      for (let i = 1; i < (array.length + 1); i++) {
        if (i <= numNota) {
          array[i - 1].className = 'glyphicon glyphicon-star cursor-pointer nota';
        } else {
          array[i - 1].className = 'glyphicon glyphicon-star-empty cursor-pointer nota';
        }
      }
    }
  }

  mouseOverStar(event, num) {
    const numNota = num;
    const clase = event.target.className;
    if (clase.indexOf('glyphicon-star') >= 0) {
      const array = document.getElementById('notas').children;
      for (let i = 1; i < (array.length + 1); i++) {
        if (i > numNota) {
          array[i - 1].className = 'glyphicon glyphicon-star-empty cursor-pointer nota';
        } else {
          array[i - 1].className = 'glyphicon glyphicon-star cursor-pointer nota';
        }
      }
      // paso la nota a input
      this.valoracion.numEvaluacion = numNota;
    }
  }

  addValoracion(event) {
    console.log(this.valoracion);
    this.valoracionService.addValoracion(this.valoracion).subscribe(res => {
      console.log('Se ha agregado');
    },
    err => {
      console.log('Error: ', err);
    });
  }

  ngOnInit() {
    console.log('Usuario: ', this.user);
  }

}
