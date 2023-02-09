import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { SerchPageComponent } from './serch-page/serch-page.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import { LoginComponent } from './login/login.component';




const routes: Routes = [

{
  path:'MoviePage/:id',
  component:MoviePageComponent
},

{
  path:'',
  component:BodyComponent
},
{
  path:'HeaderPage',
  component:HeaderComponent
},

{
  path:'serch-page/:query',
  component:SerchPageComponent
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'reg-user',
  component:RegUserComponent
},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
