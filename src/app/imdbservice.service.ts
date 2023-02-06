import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImdbserviceService {




  constructor(
    private http:HttpClient) { }

GetSerialList(){
  return this.http.get('https://imdb.ge/secure/titles?type=series&onlyStreamable=false&page=1&perPage=16')

};

  GetMovieData() {
    return this.http.get('https://imdb.ge/secure/titles');
    
  };
  GetSliderData() {
    return this.http.get('https://imdb.ge/secure/homepage/lists');
  };

  BackMoviePage(id: any) {
    return this.http.get(`https://imdb.ge/secure/titles/${id}`);
  };

  serchMovie(query: any) {
    return this.http.get(`https://imdb.ge/secure/search/${query}`)
  };



}
