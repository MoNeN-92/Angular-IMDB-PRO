import { Component, OnInit } from '@angular/core';
import { ImdbserviceService } from '../service/imdbservice.service';
import { ActivatedRoute , Router} from '@angular/router';
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel';


@Component({
  selector: 'app-serch-page',
  templateUrl: './serch-page.component.html',
  styleUrls: ['./serch-page.component.scss']
})
export class SerchPageComponent implements OnInit {

  serchResult:any;
  constructor(
    private activeRoute:ActivatedRoute,
    private movie:ImdbserviceService


  ) { }

  ngOnInit(): void {
    let id = this.activeRoute.snapshot.paramMap.get('id');
    console.warn(id);
    



  let query = this.activeRoute.snapshot.paramMap.get('query');

  query && this.movie.serchMovie(query).subscribe((response)=>{
  
  this.serchResult=response
  
})

  }

}
