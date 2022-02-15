import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/RequestLogin';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-detele-user',
  templateUrl: './detele-user.component.html',
  styleUrls: ['./detele-user.component.css']
})
export class DeteleUserComponent implements OnInit {

  usuario: RequestLogin[];

  constructor(private usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsuario();
  }

  private getUsuario(){
    this.usuarioService.getUsuarioList().subscribe(data => {
      this.usuario = data;
    });
  }

  atualizaUsuario(id: number){
    this.router.navigate(['esqueceuasenha', id]);
  }

  delete(id: number){
    this.usuarioService.delete(id).subscribe( data => {
      console.log(data);
      this.getUsuario();
    })
  }
  goToUsuarioLista(){
    this.router.navigate(['deleteuser']);
    }
}
