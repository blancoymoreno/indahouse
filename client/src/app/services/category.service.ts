import {Injectable} from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';
import { Category } from '../models/category';

@Injectable()
export class CategoryService {
    public url: string;

    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }
    addCategory(token,category: Category){
        let params = JSON.stringify(category);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url+'category', params, {headers:headers})
                .map(res => res.json());
    }
}