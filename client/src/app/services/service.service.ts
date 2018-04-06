import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';
import { Service } from '../models/service';

@Injectable()
export class ServiceService {
    public url: string;

    constructor(private _http: Http){
        this.url = GLOBAL.url;
    }
    getService(token, id: string){
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });

        let options = new RequestOptions({headers:headers});
        return this._http.get(this.url+'service/'+id, options)
                    .map(res => res.json());
    }
    addService(token, service: Service){
        let params = JSON.stringify(service);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.post(this.url+'service', params, {headers:headers})
                .map(res => res.json());
    }
    editService(token, id:string, service: Service){
        let params = JSON.stringify(service);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'Authorization': token
        });
        return this._http.put(this.url+'service/'+id, params, {headers:headers})
                .map(res => res.json());
    }
}