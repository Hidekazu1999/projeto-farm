import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Grupo} from "../model/grupo";

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  URL_GRUPO = 'http://localhost:3000/grupo';
  constructor(private httpClient: HttpClient) {
  }
  cadastrarGrupo(grupo: Grupo): Observable<Grupo> {
    return this.httpClient.post<Grupo>(this.URL_GRUPO, grupo);
  }
  listar(): Observable<Grupo[]> {
    return this.httpClient.get<Grupo[]>(this.URL_GRUPO);
  }
  remover(id: number): Observable<object> {
    return this.httpClient.delete(`${this.URL_GRUPO}/${id}`)
  }
  pesquisarPorID(id: String): Observable<Grupo> {
    return this.httpClient.get<Grupo>(`${this.URL_GRUPO}/${id}`);
  }
  atualizar(grupo: Grupo): Observable<Grupo> {
    return this.httpClient.put<Grupo>(`${this.URL_GRUPO}/${grupo.codigogrupo}`, grupo);
  }
}
