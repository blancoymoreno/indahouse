import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import {User} from '../models/User';

@Injectable()
export class UserService {
  domain: String = 'http://localhost:3977';

  constructor(private http: HttpClient) { }

  getUser(idUser: string): Observable<any> {
    return this.http.get<User>(`${this.domain}/api/user/${idUser}`).map(res => {
      return res;
    });
  }

}
