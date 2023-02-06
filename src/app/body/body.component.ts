import { ActivatedRoute, Router } from '@angular/router';
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
      transition('* => *', animate(500)),

    ])
  ]

})





export class BodyComponent implements OnInit {
  slides: any = [];
  currentSlide = 0;
  movies: any = [];
  selectedMovie: any;
  starss: any;
  show = false;
  MovielistData: any;
  SerialsData: any = [];
  BackMoviePageData: any
  MovieStar: any
  actors:any
  filteredData:any = []
  

  constructor(
    private Movielist: ImdbserviceService,
    private slider: ImdbserviceService,
    private activeRouter: ActivatedRoute,
    private BackMoviePagee: ImdbserviceService,
    private stars: ImdbserviceService,
    private serials:ImdbserviceService,
    private actor:ImdbserviceService
   
  ) {

  }

  id = this.activeRouter.snapshot.params['id']


  ngOnInit(): void {



    setInterval(() => {
      this.nextSlide();
    }, 5000);

   this.serials.GetSeriesData().subscribe((res)=>{
    this.SerialsData = res
   })
 


    this.slider.GetSliderData().subscribe((res) => {
      this.slides = res
      // console.log(this.slides.lists[0].items);


    })
    
    // this.stars.MovieStars().subscribe((data:any) => {
    //   this.starss = data.filter((data:any) => {
    //     const today = new Date();
    //     const starDOB = new Date(data.dob);
    //     console.log(this.starss.pagination.data)

    //     return (
    //       starDOB.getDate() === today.getDate() &&
    //       starDOB.getMonth() === today.getMonth()
         
    //     );
       
    //   });
    // }
    // );
  

    // this.stars.MovieStars().subscribe(respo => {


    //   this.MovieStar = respo
      
    //   console.log(this.MovieStar.pagination.data);

    // })


    
    this.stars.MovieStars().subscribe(respo => {
      this.MovieStar = respo;

      console.log(this.filteredData);
    });
 




    this.BackMoviePagee.BackMoviePage(this.id).subscribe((ress: any) => {
      this.BackMoviePageData = ress

      // console.log(this.BackMoviePageData.title);


    })

    this.Movielist.GetMovieData().subscribe((res: any) => {
      this.MovielistData = res

      // console.log(this.MovielistData.pagination.data);
    })



  }

  carousel: any = {
    'left': '0%',

  }

  LeftClick() {
    // this.carousel['left'] = (Number(this.carousel['left'].split('%')[0]) + 20) + "%"
    let newLeft = Number(this.carousel['left'].split('%')[0]) + 20;
    if (newLeft >= 0) {
      newLeft = -200;
    }
    this.carousel['left'] = newLeft + "%";
  };


  RightClick() {
    let newLeft = Number(this.carousel['left'].split('%')[0]) - 20;
    if (newLeft <= -220) {
      newLeft = 0;
    }
    this.carousel['left'] = newLeft + "%";


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



  setSelectedMovie(movie: any) {
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










