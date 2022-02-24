import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cliente} from "../model/cliente";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  URL_CLIENTE = 'http://localhost:3000/cliente';
  constructor(private httpClient: HttpClient) {
  }
  cadastrarCliente(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.URL_CLIENTE, cliente);
  }
  listar(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(this.URL_CLIENTE);
  }
  remover(id: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_CLIENTE}/${id}`)
  }
  pesquisarPorID(id: string): Observable<Cliente> {
    return this.httpClient.get<Cliente>(`${this.URL_CLIENTE}/${id}`);
  }
  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.put<Cliente>(`${this.URL_CLIENTE}/${cliente.id}`, cliente);
  }
}
