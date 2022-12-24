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
  constructor(
    private activeRouter: ActivatedRoute,
    private Movielist:ImdbserviceService,
    private BackMoviePage:ImdbserviceService
    
  ) { }

  id = this.activeRouter.snapshot.params['id']
  
  ngOnInit(): void {

    this.BackMoviePageData.BackMoviePage().subscribe((res:any)=> {
      this.BackMoviePage = res
    
      console.log(this.BackMoviePage);


    })

this.Movielist.GetMovieData().subscribe((res:any)=> {
  this.MovielistData = res

  console.log(this.MovielistData.pagination.data);
  console.log(this.MovielistData.pagination.data[0].id);
  

  
})
      

  }

}
