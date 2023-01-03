import { Component,  OnInit } from '@angular/core';
import { ImdbserviceService } from '../imdbservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  searchResult:any

  constructor(
    private movies:ImdbserviceService,
    private route:Router
  ) { }

  ngOnInit(): void {
  }

  serchMovie(query:KeyboardEvent){
if (query){
  let element = query.target as HTMLInputElement;
 
  this.movies.serchMovie(element.value).subscribe((res)=>{
 
     this.searchResult=res
    //  console.log(this.searchResult.results);
     
  })
  
}
  }
  hideserch(){
    this.searchResult = undefined
  }

  submitSerch(val:any){
    console.log(val);
    this.route.navigate([`serch-page/${val}`]);
    
  }

}
