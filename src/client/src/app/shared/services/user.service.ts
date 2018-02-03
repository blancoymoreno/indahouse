import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/Rx';

import {User} from '../models/User';

@Injectable()
export class UserService {
  domain: String = 'http://localhost:3977';
  constructor(private http: HttpClient) { }

  getUser(idUser) {
    return this.http.get<User[]>(`${this.domain}/api/user/${idUser}`).map(res => res);
  }

}
