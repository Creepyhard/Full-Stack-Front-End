import { AtualizaUsuarioComponent } from './atualiza-usuario/atualiza-usuario.component';
import { ContatoComponent } from './pagina/contato/contato.component';
import { SignupComponent } from './pagina/signup/signup.component';
import { LoginComponent } from './pagina/login/login.component';
import { HomeComponent } from './pagina/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeteleUserComponent } from './pagina/detele-user/detele-user.component';

const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'contato', component: ContatoComponent},
    {path: 'login', component: LoginComponent},
    {path: 'esqueceuasenha/:id', component: AtualizaUsuarioComponent},
    {path: 'deleteuser', component: DeteleUserComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
