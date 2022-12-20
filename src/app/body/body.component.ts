import { Component, OnInit } from '@angular/core';
import { ImdbserviceService } from '../imdbservice.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  show = false;


  // changeHeightSection(){
  // this.show = this.show =="show" ? "hide" : "show"
  // }
  MovielistData:any;
  SliderData:any;

  constructor(
    
    private Movielist:ImdbserviceService,
    private slider:ImdbserviceService
  ) {

   }

  ngOnInit(): void {


    
this.Movielist.GetMovieData().subscribe((res:any)=> {
  this.MovielistData = res

  console.log(this.MovielistData.pagination.data);
  
})
this.slider.GetSliderData().subscribe((response:any)=> {
  this.SliderData = response

  console.log(this.SliderData.lists);
  
})
      

  }


  ChangeInfo(array:any){
this.MovielistData.poster = array;
console.log(array);

  }

}
