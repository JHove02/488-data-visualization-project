import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-data-options',
  templateUrl: './data-options.component.html',
  styleUrls: ['./data-options.component.css']
})
export class DataOptionsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  barData = this.dataService.barData;
  

  ngOnInit(): void {
  }

  removeBarData():void{
    let selectedRemove = (document.getElementById("selectRemovePoints")) as HTMLSelectElement;
    let i = selectedRemove.selectedIndex;
    this.dataService.removeBarChartData(i);
  }

  addBarData(){
    

  }

}
