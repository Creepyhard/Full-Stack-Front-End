import { RequestLogin } from './../../RequestLogin';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: RequestLogin = new RequestLogin;

  constructor() { }

  ngOnInit() {
  }

  fazerLogin() {
  }

}
