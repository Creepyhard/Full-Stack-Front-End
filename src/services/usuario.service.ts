import { Observable } from 'rxjs';
import { RequestLogin } from './../app/RequestLogin';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({ providedIn: 'root' })
export class UsuarioService {

  private baseUrl = "http://localhost:8080/usuarios";

  constructor(private httpClient: HttpClient) { }

  getUsuarioList(): Observable<RequestLogin[]>{
    return this.httpClient.get<RequestLogin[]>(`${this.baseUrl}`);
  }

  getUsuarioPorID (id: number): Observable<RequestLogin> {
    return this.httpClient.get<RequestLogin>(`${this.baseUrl}/${id}`);
  }

  public loginUsuarioRemoto(usuario: RequestLogin): Observable<Object> {
    return this.httpClient.post(`${this.baseUrl}/login`, usuario)
  }

  criarUsuario(usuario: RequestLogin): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, usuario);
  }

  atualizarUsuario(id: number, usuario: RequestLogin): Observable<Object> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, usuario);
  }

  delete(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
