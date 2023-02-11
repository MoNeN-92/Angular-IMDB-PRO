import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImdbserviceService } from '../service/imdbservice.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  MovieRating:any
  MovielistData:any;
  BackMoviePageData:any
  rating: number;
  MovieBackData:any
  starsPageData:any
  constructor(
    private activeRouter: ActivatedRoute,
    private Movielist:ImdbserviceService,
    private BackMoviePage:ImdbserviceService,
    private MovieBack:ImdbserviceService,
    private starsPage:ImdbserviceService

  ) {  this.rating = 0; }

 
      id = this.activeRouter.snapshot.paramMap.get('id');


 

  ngOnInit(): void {


 
    

 this.BackMoviePage.BackMoviePage(this.id).subscribe((ress:any)=> {
          this.BackMoviePageData = ress
            // console.log(ress.seo);

          this.BackMoviePageData.title.credits.forEach((credit:any) => {
            this.starsPageData = credit
            // console.log(credit.poster);
          });
        })

        
 
console.log(this.activeRouter.snapshot);



this.Movielist.GetMovieData().subscribe((res:any)=> {
  this.MovielistData = res

  // console.log(this.MovielistData);

  
// console.log(this.MovielistData.pagination.data);

  
  
})
      

  }

}
