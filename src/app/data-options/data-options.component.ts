import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { NgModel } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-data-options',
  templateUrl: './data-options.component.html',
  styleUrls: ['./data-options.component.css']
})
export class DataOptionsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  barData = this.dataService.getBarData();

  lineData = this.dataService.getLineData();

  barSelected = this.dataService.getSelectedChart();
  

  ngOnInit(): void {
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
