import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  barData = [{
    type: "bar",
    indexLabel: "{y}",
    yValueFormatString: "#,###k",
    dataPoints: [
      { label: "Snapchat", y: 15 },
      { label: "Instagram", y: 20 },
      { label: "YouTube", y: 24 },
      { label: "Twitter", y: 29 },
      { label: "Facebook", y: 73 }
    ]
  }]

  chartSelected: string = 'bar';

  setSelectedChart(selectChart: string): void {
    this.chartSelected = selectChart;
  }

  getSelectedChart(): string{
    return this.chartSelected;
  }

  addBarChartData(newLabel:string, newY: number): void {
    this.barData[0].dataPoints.push({label: newLabel, y: newY})
  }

 removeBarChartData(index: number){
    this.barData[0].dataPoints.splice(index, 1)
  }



}


