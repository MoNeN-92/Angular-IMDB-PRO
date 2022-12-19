import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImdbserviceService {




  constructor(
    private  http: HttpClient
  ) { }


  GetMovieData(){
    return this.http.get('assets/DB/MovieData.json')

    
  }
  
}
