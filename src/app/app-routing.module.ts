import {  Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { SerchPageComponent } from './serch-page/serch-page.component';




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
},

{
  path:'serch-page/:query',
  component:SerchPageComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
