import { Component, OnInit } from '@angular/core';
import { ImdbserviceService } from '../imdbservice.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  MovielistData:any ;

  constructor(
    
    private Movielist:ImdbserviceService
  ) {

   }

  ngOnInit(): void {
    // this.rs.getBook().subscribe((data: any)=>{
    //   this.books = data.books;
    //   console.log(this.books);
    // }) 

// this.Movielist.GetMovieData().subscribe((response:any)=>{
// this.MovielistData = response;
//    console.log(this.MovielistData.title.id);
   
//     })
this.Movielist.GetMovieData().subscribe((res:any)=> {
  this.MovielistData = res

  console.log(this.MovielistData);
  
})
      
     
  }

}
