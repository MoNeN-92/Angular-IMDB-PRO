import { ActivatedRoute , Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImdbserviceService } from '../imdbservice.service';

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

  constructor(
    private Serials:ImdbserviceService,
    private Movielist:ImdbserviceService,
    private slider:ImdbserviceService,
    private activeRouter:ActivatedRoute
  ) {


   }

  //  id = this.activeRouter.snapshot.params['id']

   
  ngOnInit(): void {

    // this.Serials.GetSeriesData().subscribe((SerData:any)=>{
    //   this.SerialsData = SerData
    //   // console.log(this.SerialsData.pagination.data);
      

    // })

this.Movielist.GetMovieData().subscribe((res:any)=> {
  this.MovielistData = res

  console.log(this.MovielistData.pagination.data);

  
  
  
})
// this.slider.GetSliderData().subscribe((response:any)=> {
//   this.SliderData = response

  
// })
      

  }


//   ChangeInfo(s:any){
// this.MovielistData = s;

//   }


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
