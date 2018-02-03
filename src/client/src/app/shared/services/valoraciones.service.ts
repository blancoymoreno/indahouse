import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import {Valoracion} from '../models/Valoracion';

@Injectable()
export class ValoracionesService {
  domain: String = 'http://localhost:3977';
  constructor(private http: HttpClient) { }

  getValoracionesByProvider(idProvider) {
    return this.http.get<Valoracion[]>(`${this.domain}/api/valoraciones/${idProvider}`).map(res => res);
  }

}
