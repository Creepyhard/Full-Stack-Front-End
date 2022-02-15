import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestLogin } from 'src/app/RequestLogin';
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private http: HttpClient) { }

 // public loginUsuarioRemoto(usuario: RequestLogin): Observable<any> {


}
