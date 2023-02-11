import { Component,  OnInit } from '@angular/core';
import { ImdbserviceService } from '../service/imdbservice.service';
import { ActivatedRoute , Router} from '@angular/router';


@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  searchResult:any
  selectedOption: any;
  showDropdown = false;
  
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  
  selectOption(option: string) {
    this.selectedOption = option;
    this.showDropdown = false;
  }
  constructor(
    private movies:ImdbserviceService,
    private route:Router,
    private activeRouter:ActivatedRoute
  ) { }
   id = this.activeRouter.snapshot.params['id']

  ngOnInit(): void {
  }



  hideSearch() {
    this.searchResult = null;
  }

  serchMovie(query:KeyboardEvent){
if (query){
  let element = query.target as HTMLInputElement;
 
  this.movies.serchMovie(element.value).subscribe((res)=>{
 
     this.searchResult=res
     console.log(this.searchResult.results);
     
  })
  
}
  }
  hideserch(){
    this.searchResult = undefined
  }

  submitSerch(val:any){
    // console.log(val);
    this.route.navigate([`serch-page/${val}`]);
    
  }


}
