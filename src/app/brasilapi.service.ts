import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estado } from './brasilapi.models';

@Injectable({
  providedIn: 'root'
})
export class BrasilapiService {

  baseURL: string = 'https://brasilapi.com.br/api/';
  
  constructor(private http: HttpClient) { }

  lsitarUFs(): Observable<Estado[]>{
    const path = 'ibge/uf/v1';
    return this.http.get<Estado[]>(this.baseURL + path);
  }
}
