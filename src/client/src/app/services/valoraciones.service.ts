import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import {Valoracion} from '../Valoracion';

@Injectable()
export class ValoracionesService {
  domain: String = 'http://localhost:3977';
  constructor(private http: HttpClient) { }

  getValoraciones() {
    //return this.http.get<Valoracion[]>(`${this.domain}/api/valoraciones`).map(res => res);
    return this.http.get<Valoracion[]>('http://localhost:3977/api/valoraciones').map(res => res);
  }

}
