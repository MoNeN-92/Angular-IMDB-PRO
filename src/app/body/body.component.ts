import { ActivatedRoute , Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ImdbserviceService } from '../service/imdbservice.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
  animations: [
    trigger('slideState', [
      state('previous', style({ transform: 'translateX(-100%)' })),
      state('current', style({ transform: 'translateX(0)' })),
      state('next', style({ transform: 'translateX(100%)' })),
      transition('* => *', animate(500))
    ])
  ]
  
})


export class BodyComponent implements OnInit {
  slides:any = [      ];
  currentSlide = 0;
  movies:any = [   ];
  selectedMovie:any;

  

  show = false;

  MovielistData:any;
  SerialsData:any;
  BackMoviePageData:any
  MovieStar:any
  // nextSlide:any
  // currentSlide:number

  constructor(
    private http: HttpClient,
    private Serials:ImdbserviceService,
    private Movielist:ImdbserviceService,
    private slider:ImdbserviceService,
    private activeRouter:ActivatedRoute,
    private BackMoviePage:ImdbserviceService,
    private items:ImdbserviceService,
    private stars:ImdbserviceService
    

  ) {


   }

    id = this.activeRouter.snapshot.params['id']

   
  ngOnInit(): void {

    setInterval(() => {
      this.nextSlide();
    }, 5000);
    
this.slider.GetSliderData().subscribe((res)=>{
  this.slides = res
  console.log(this.slides.lists[0].items);
  
})

this.stars.MovieStars().subscribe((respo) =>{
  this.MovieStar = respo
  // console.log(this.MovieStar.pagination.data);
  
})

    this.slider.GetSliderData().subscribe((slidData:any)=>{
      this.SerialsData = slidData
      // console.log(this.SerialsData.lists);
      

    })
    this.BackMoviePage.BackMoviePage(this.id).subscribe((ress:any)=> {
      this.BackMoviePageData = ress

          // console.log(this.BackMoviePageData.poster);
          

    })
    this.BackMoviePage.BackMoviePage(this.id).subscribe((ress:any)=> {
          this.BackMoviePageData = ress
    
              console.log(this.BackMoviePageData.title);
              
    
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

 
   getSlideState(index: number) {
    if (index < this.currentSlide) {
      return 'previous';
    } else if (index === this.currentSlide) {
      return 'current';
    } else {
      return 'next';
    }
  }


  
  setSelectedMovie(movie:any) {
    this.selectedMovie = movie;
  }




  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % 5;
  }
  
  previousSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = 4;
    } else {
      this.currentSlide--;
    }
  }

}










