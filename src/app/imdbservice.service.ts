import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImdbserviceService {




  constructor(
    private  http: HttpClient,

    
  ) { }

  GetMovieData(){
    return this.http.get('https://imdb.ge/secure/titles');
}
GetSliderData(){
  return this.http.get('https://imdb.ge/secure/homepage/lists');
}
// GetSeriesData(){
//   return this.http.get('https://imdb.ge/secure/titles/');
// }

BackMoviePage(id:any){
  return this.http.get(`https://imdb.ge/secure/titles/${id}`);
}

serchMovie(query:any){
  return this.http.get(`https://imdb.ge/secure/search/${query}`)
}



}
