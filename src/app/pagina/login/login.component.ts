import { UsuarioService } from 'src/services/usuario.service';
import { Router } from '@angular/router';
import { RequestLogin } from './../../RequestLogin';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg="";
  usuario: RequestLogin = new RequestLogin;

  constructor(private service: UsuarioService, private router: Router) { }

  ngOnInit() {
  }
  //recomendado
  /*fazerLogin() {
    this.service.loginUsuarioRemoto(this.usuario).subscribe({
      error(err) {this.msg="Email ou senha invalidos";},
      complete: () => this.router.navigate(["/deleteuser"])}
    )
  }*/
  //antigo
  fazerLogin() {
   this.service.loginUsuarioRemoto(this.usuario).subscribe(
     data => {
       this.router.navigate(["/deleteuser"])
     } ,
     error => {
       this.msg="Email ou senha invalidos";
     }
   )
  }
}

