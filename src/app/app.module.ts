import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeadComponent } from './head/head.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviePageComponent } from './movie-page/movie-page.component';
import { SerchPageComponent } from './serch-page/serch-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatCarouselModule } from 'ng-mat-carousel';
import { RegUserComponent } from './reg-user/reg-user.component';
import { LoginComponent } from './login/login.component';
import { FilterPipe } from './filter.pipe';
import { FilterBornTodayPipe } from './filter-born-today.pipe';
import { PopularSeriesComponent } from './popular-series/popular-series.component';
import { PopularTvShowComponent } from './popular-tv-show/popular-tv-show.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    HeadComponent,
    HeaderComponent,
    BodyComponent,
    MoviePageComponent,
    SerchPageComponent,
    RegUserComponent,
    LoginComponent,
    FilterPipe,
    FilterBornTodayPipe,
    PopularSeriesComponent,
    PopularTvShowComponent,
  
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatStepperModule,
    FormsModule,
    MatCarouselModule.forRoot(),
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
