import { UsuarioService } from 'src/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/RequestLogin';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  usuario: RequestLogin = new RequestLogin();
  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  salvarUsuario(){
    this.usuarioService.criarUsuario(this.usuario).subscribe( data =>{
      console.log(data);
      this.goToUsuarioLista();
    },
    error => console.log(error))
  }

  goToUsuarioLista(){
    this.router.navigate(['/usuarios'])
  }

  onSubmit(){
    console.log(this.usuario);
    this.salvarUsuario();
    this.router.navigate(["/login"])
  }
}
