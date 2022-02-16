import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pagina/home/home.component';
import { ContatoComponent } from './pagina/contato/contato.component';
import { LoginComponent } from './pagina/login/login.component';
import { MenuComponent } from './pagina/menu/menu.component';
import { SignupComponent } from './pagina/signup/signup.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';
import { DeteleUserComponent } from './pagina/detele-user/detele-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContatoComponent,
    LoginComponent,
    MenuComponent,
    SignupComponent,
    AddUsuarioComponent,
    AtualizaUsuarioComponent,
    DeteleUserComponent

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
