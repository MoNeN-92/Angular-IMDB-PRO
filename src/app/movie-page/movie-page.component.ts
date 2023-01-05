import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImdbserviceService } from '../service/imdbservice.service';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {

  MovielistData:any;
  BackMoviePageData:any
  MovieBackData:any
  starsPageData:any
  constructor(
    private activeRouter: ActivatedRoute,
    private Movielist:ImdbserviceService,
    private BackMoviePage:ImdbserviceService,
    private MovieBack:ImdbserviceService,
    private starsPage:ImdbserviceService

  ) { }

 
      id = this.activeRouter.snapshot.paramMap.get('id');


  ngOnInit(): void {



 this.BackMoviePage.BackMoviePage(this.id).subscribe((ress:any)=> {
          this.BackMoviePageData = ress
    
              console.log(this.BackMoviePageData.title);
              
    
        })

        
 
console.log(this.activeRouter.snapshot);



this.Movielist.GetMovieData().subscribe((res:any)=> {
  this.MovielistData = res
// console.log(this.MovielistData.pagination.data);

  
  
})
      

  }

}
