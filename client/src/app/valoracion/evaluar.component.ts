import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Valoracion } from '../shared/models/Valoracion';
import { ValoracionesService } from '../shared/services/valoraciones.service';

@Component({
  selector: 'app-evaluar',
  templateUrl: './evaluar.component.html'
})
export class EvaluarComponent implements OnInit, OnChanges {

  valoracion: Valoracion;
  @Input() proveedor: any;

  constructor(
    private valoracionService: ValoracionesService,
  ) {

    // inicializar Valoracion
    this.valoracion = {
      numEvaluacion: 0,
      comentario: '',
      idUserValorado: '',
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

  mouseLeaveStar(event, num) {
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

  getPromedioValoracion() {
    let promedio = 0;
    const numValoraciones = this.proveedor.valoraciones;
    numValoraciones.push(this.valoracion);
    let i = 0;
    for (const valoracion of numValoraciones) {
      promedio = promedio + valoracion.numEvaluacion;
      i++;
    }
    promedio = (promedio / i);
    this.valoracion.valoracionPromedio = promedio;
    this.proveedor.valoracionPromedio = promedio;
  }

  addValoracion(event) {
    if (this.valoracion.numEvaluacion === 0) {
      this.valoracion.numEvaluacion = 1;
    }
    this.getPromedioValoracion();
    this.valoracionService.addValoracion(this.valoracion).subscribe(res => {
      console.log('Se ha agregado ', res);
      this.limpiarModalValoracion();
    },
      err => {
        console.log('Error: ', err);
      });
  }

  limpiarModalValoracion() {
    const notas: any = document.getElementById('notas').children;
    let i = 0;
    for (const nota of notas) {
      if (i === 0) {
        nota.classList.add('glyphicon-star');
      }else {
        nota.classList.add('glyphicon-star-empty');
        nota.classList.remove('glyphicon-star');
      }
      i++;
    }
    const textarea: any = document.getElementById('textoevaluacion');
    textarea.value = '';
  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.valoracion.idUserValorado = this.proveedor._id;
  }

}
