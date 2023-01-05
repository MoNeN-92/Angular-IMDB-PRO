import { ActivatedRoute , Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImdbserviceService } from '../service/imdbservice.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  show = false;

  MovielistData:any;
  SliderData:any;
  SerialsData:any;
  BackMoviePageData:any

  constructor(
    private Serials:ImdbserviceService,
    private Movielist:ImdbserviceService,
    private slider:ImdbserviceService,
    private activeRouter:ActivatedRoute,
    private BackMoviePage:ImdbserviceService,
    private items:ImdbserviceService,

  ) {


   }

    id = this.activeRouter.snapshot.params['id']

   
  ngOnInit(): void {


    this.slider.GetSliderData().subscribe((slidData:any)=>{
      this.SerialsData = slidData
      console.log(this.SerialsData.lists);
      

    })
    this.BackMoviePage.BackMoviePage(this.id).subscribe((ress:any)=> {
      this.BackMoviePageData = ress

          // console.log(this.BackMoviePageData.poster);
          

    })

this.Movielist.GetMovieData().subscribe((res:any)=> {
  this.MovielistData = res

  // console.log(this.MovielistData.pagination.data);

  
  
  
})

      

  }

  carousel:any = {
    'left': '0%',
   
  }

  LeftClick(){
   this.carousel['left'] = (Number (this.carousel['left'].split ('%')[0]) + 20) +"%"
  };
  RightClick(){
    this.carousel['left'] = (Number (this.carousel['left'].split ('%')[0]) - 20) +"%"
   };

 

}
