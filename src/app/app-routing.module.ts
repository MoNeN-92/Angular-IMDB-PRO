import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';




const routes: Routes = [
{
  path:'MoviePage/:id',
  component:MoviePageComponent
},
{
  path:'mainPage',
  component:BodyComponent
},
{
  path:'HeaderPage',
  component:HeaderComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
