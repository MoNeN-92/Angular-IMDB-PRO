import { Component, OnInit } from '@angular/core';
import { ImdbserviceService } from '../imdbservice.service';
import { ActivatedRoute , Router} from '@angular/router';



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
  let query = this.activeRoute.snapshot.paramMap.get('query');

  query && this.movie.serchMovie(query).subscribe((response)=>{
  
  this.serchResult=response
  
})

  }

}
