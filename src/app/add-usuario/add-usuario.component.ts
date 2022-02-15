import { RequestLogin } from './../RequestLogin';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/services/usuario.service';
import { FormControl,FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  constructor(private usuarioRepository:UsuarioService) { }

  usuario : RequestLogin = new RequestLogin();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }
/*
  usuariosaveform=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    senha:new FormControl()
  });

  adicionar(adicionar){
    this.usuario = new RequestLogin();
    this.usuario.email = this.email.value;
    this.usuario.senha = this.senha.value;
    this.submitted = true;
    this.save();
  }



  save() {
    this.usuarioRepository.createUsuario(this.usuario)
      .subscribe(data => console.log(data), error => console.log(error));
    this.usuario = new RequestLogin();
  }

  get UsuarioEmail(){
    return this.usuariosaveform.get('usuario_email');
  }

  get UsuarioSenha(){
    return this.usuariosaveform.get('usuario_senha');
  }

  addUsuarioForm(){
    this.submitted=false;
    this.usuariosaveform.reset();
  }
  */
}

