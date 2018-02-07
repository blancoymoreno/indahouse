import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

import {Valoracion} from '../models/Valoracion';

@Injectable()
export class ValoracionesService {
  domain: String = 'http://localhost:3977';
  constructor(private http: HttpClient) { }

  getValoracionesByProvider(idProvider): Observable<any> {
    return this.http.get<any[]>(`${this.domain}/api/valoraciones/${idProvider}`).map(res => res);
  }

  addValoracion(valoracion: Valoracion): Observable<any> {
    const json = JSON.stringify(valoracion);
    const params = 'json=' + json;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(`${this.domain}/api/create-valoracion`, params, {headers: headers});
}

}
