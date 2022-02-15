import { RequestLogin } from './../RequestLogin';
import { UsuarioService } from 'src/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualiza-usuario',
  templateUrl: './atualiza-usuario.component.html',
  styleUrls: ['./atualiza-usuario.component.css']
})
export class AtualizaUsuarioComponent implements OnInit {

  id: number;
  usuario: RequestLogin = new RequestLogin();
  constructor(private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

    this.usuarioService.getUsuarioPorID(this.id)
      .subscribe(data => {
      this.usuario = data;
    }, error => console.log(error));
  }

onSubmit() {
  this.usuarioService.atualizarUsuario(this.id, this.usuario)
    .subscribe(data => {
      this.goToUsuarioLista();
    }, error => console.log(error));
}

goToUsuarioLista(){
  this.router.navigate(['/usuarios']);
  }
}
