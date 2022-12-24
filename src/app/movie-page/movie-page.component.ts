import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImdbserviceService } from '../imdbservice.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  MovielistData:any;
  BackMoviePageData:any
  MovieBackData:any

  constructor(
    private activeRouter: ActivatedRoute,
    private Movielist:ImdbserviceService,
    private BackMoviePage:ImdbserviceService,
    private MovieBack:ImdbserviceService
  ) { }

 
  id = this.activeRouter.snapshot.params['id']



  ngOnInit(): void {
// console.log(this.activeRouter.snapshot.params);
console.log(this.activeRouter);
console.log(this.id);



this.MovieBack.BackMoviePage().subscribe((resp:any) => {
  this.MovieBackData = resp
  // console.log(this.MovieBackData.pagination.data);
  
})

    this.BackMoviePage.BackMoviePage().subscribe((ress:any)=> {
      this.BackMoviePageData = ress
    
      // console.log(this.BackMoviePageData.title.name);


    })

this.Movielist.GetMovieData().subscribe((res:any)=> {
  this.MovielistData = res
  // console.log(this.MovielistData);
  // console.log(this.MovielistData.pagination.data);
  // console.log(this.MovielistData.pagination.data['id']);
  

  
})
      

  }

}
