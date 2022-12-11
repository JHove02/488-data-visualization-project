import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModel } from '@angular/forms';
import { __values } from 'tslib';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-data-options',
  templateUrl: './data-options.component.html',
  styleUrls: ['./data-options.component.css']
})
export class DataOptionsComponent implements OnInit, DoCheck{

  constructor(private dataService: DataService) { 
  }

  barData = this.dataService.getBarData();

  lineData = this.dataService.getLineData();

  chartSelected = this.dataService.getSelectedChart();
  
  ngOnInit(): void {
    this.chartSelected = this.dataService.getSelectedChart();
  }

  ngDoCheck(): void{
    this.chartSelected = this.dataService.getSelectedChart();
    console.log(this.chartSelected + " do check value")
  }


  removeBarData():void{
    let selectedRemove = (document.getElementById("selectRemovePoints")) as HTMLSelectElement;
    let i = selectedRemove.selectedIndex;
    this.dataService.removeBarChartData(i);
  }

  addBarData(label:string, y:string){
    let yNum = Number.parseInt(y);
    this.dataService.addBarChartData(label, yNum);
    const eleLabel = <HTMLInputElement> document.getElementById("bar-input-label");
    const eleY = <HTMLInputElement> document.getElementById("bar-input-number");
    
    eleLabel.value = '';
    eleY.value = '';
  }

  addLineData(x:string, y:string){
    let yNum = Number.parseInt(y);
    let xNum= Number.parseInt(x);
    this.dataService.addLineChartData(xNum, yNum);
    const elex = <HTMLInputElement> document.getElementById("line-input-x");
    const eleY = <HTMLInputElement> document.getElementById("line-input-y");
    
    elex.value = '';
    eleY.value = '';
  }

  removeLineData():void{
    let selectedRemove = (document.getElementById("selectRemovePoints")) as HTMLSelectElement;
    let i = selectedRemove.selectedIndex;
    this.dataService.removeLineChartData(i);
  }

}
