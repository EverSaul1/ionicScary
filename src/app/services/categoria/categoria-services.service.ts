import { Injectable } from '@angular/core';
import {HttpClient, HttpParams } from "@angular/common/http";
import {Observable, Subject} from 'rxjs';
import { Categoria, List } from 'src/app/interface/categoria-interface';
import {Historia} from "../../interface/historia.interface";
import {Comments} from "../../interface/comment-interface";
import {tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CategoriaServicesService {

  private _refresh$ = new Subject<void>();

  private apiUrl: string = 'http://localhost:3000/api';

  constructor(private _http: HttpClient) { }


  get refresh$(){
    return this._refresh$;
  }

  //TRAER CATEGORIAS

  getCategory(): Observable<List[]>{
    const url = `${this.apiUrl}/category`;
    return this._http.get<List[]>(url);
  }

  //TRAER HISTORIAS

  getHistorias(idCat: string): Observable<Historia[]>{

    const params = new HttpParams()
      .set('category', idCat)
      .set('nameHistory', '');
    const url = (`${this.apiUrl}/history/show/`);

    return this._http.get<Historia[]>(url, {params});
  }
  //numero de comentarios

  getNComentario(idHistoria: any): Observable<Comments>{
    const params = new HttpParams()
      .set('history',idHistoria);
    const url = `${this.apiUrl}/ranking/countComment`;
    return this._http.get<Comments>(url, {params});
  }

  getCommentarioHistoria(idHistoria: any): Observable<any>{
    const params = new HttpParams()
      .set('history', idHistoria);
    const url = `${this.apiUrl}/ranking/getComment`;

    return this._http.get<any>(url, {params});
  }
  guardarComentario(comentario: any): Observable<any>{
    const url = `${this.apiUrl}/ranking/commentHistory`;
    return this._http.post<any>(url, comentario).pipe( tap(() => {
      this.refresh$.next();
    }));
  }
}
