import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

import {Valoracion} from '../models/Valoracion';

@Injectable()
export class ValoracionesService {
  domain: String = 'http://localhost:3977';
  constructor(private http: HttpClient) { }

  getValoracionesByProvider(idProvider) {
    return this.http.get<any[]>(`${this.domain}/api/valoraciones/${idProvider}`).map(res => res);
  }

  addValoracion(valoracion) {
    return this.http.post<Valoracion>(`${this.domain}/api/create-valoracion`, valoracion).map(res => res);
  }

}
