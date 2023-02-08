import { Component, OnInit } from '@angular/core';
import { ImdbserviceService } from '../service/imdbservice.service';

@Component({
  selector: 'app-popular-series',
  templateUrl: './popular-series.component.html',
  styleUrls: ['./popular-series.component.scss']
})
export class PopularSeriesComponent implements OnInit {

  SerialsData: any = [];


  constructor(    private serials:ImdbserviceService,
    ) { }

  ngOnInit(): void {

    this.serials.GetSeriesData().subscribe((res)=>{
      this.SerialsData = res
     })
  }

}
