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
    return this.http.get('https://imdb.ge/secure/titles?type=movie&onlyStreamable=false&page=1&perPage=16');
}
GetSliderData(){
  return this.http.get('https://imdb.ge/secure/homepage/lists');
}
GetSeriesData(){
  return this.http.get('https://imdb.ge/secure/titles?type=series&onlyStreamable=false&page=1&perPage=16&fbclid=IwAR3LC4V0mt_sQzfI5MO9E09pOdKN4b_ei359nsvjXWFQ81nX_zYiEZZSnMQ');
}
BackMoviePage(){
  return this.http.get('https://imdb.ge/secure/titles/?fbclid=IwAR19sBCDHGNASuHXcb-bxo5nyuzpsZj6d5F6yP5sEqHbk1SLtPaN4HRbCh0');
}



  
}
