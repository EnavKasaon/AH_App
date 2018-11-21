import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import {appSettings} from '../app.settings';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

import {Supplier} from '../models/Supplier'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token',
    'Accept': 'q=0.8;application/json;q=0.9',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Origin': 'true'
  })
};
@Injectable()
export class SupplierService {

  constructor(private _http: HttpClient, private _appSettings: appSettings) {
    
  }
  headers: Headers;
  options: RequestOptions;
  sup: Supplier;


  public getSupplierName(): Observable<Supplier>{  
   return this._http.get<Supplier>(`${this._appSettings.serverBaseUrl}/Supplier/GetSupplierName`); 

  };
/*
  public getProjectLists(): Observable<Supplier>{  
    return this._http.get(`${this._appSettings.serverBaseUrl}/Projects/GetProjectsList`).map(res => res.json());     
  };

  public getBrowsersLists(): Observable<any>{  
    return this._http.get(`${this._appSettings.serverBaseUrl}/Home/GetBrosersTypes`).map(res => res.json());     
  };*/


    
}
