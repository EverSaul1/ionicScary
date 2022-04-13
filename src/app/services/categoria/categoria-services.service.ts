import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Categoria, List } from 'src/app/interface/categoria-interface';


@Injectable({
  providedIn: 'root'
})
export class CategoriaServicesService {

  private apiUrl: string = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) { }


  //TRAER CATEGORIAS

  getCategory():Observable<List[]>{
    const url = `${this.apiUrl}/category`;
    return this._http.get<List[]>(url);
  }

  //TRAER HISTORIAS

  getHistorias(idCategoria: string, nameHistory: string):Observable<any[]>{

    const params = new HttpParams()
      .set('category', idCategoria)
      .set('nameHistory', nameHistory);
    const url = `${this.apiUrl}/show ${params}`;

    return this._http.get<any[]>(url);

  }
}
