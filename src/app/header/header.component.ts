import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck{

  constructor(private datSer: DataService) { 
  }

  //get chart choice so the view chart button gets the correct link
  chartSelected = this.datSer.getSelectedChart();

  //double check chart selection on load
  ngOnInit(): void {
    this.chartSelected = this.datSer.getSelectedChart();
  }

  ngDoCheck(): void{
    this.chartSelected = this.datSer.getSelectedChart();
  }



}
