import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private barData = [{
    type: "bar",
    indexLabel: "{y}",
    yValueFormatString: "#,###",
    dataPoints: [
      { label: "Snapchat", y: 15 },
      { label: "Instagram", y: 20 },
      { label: "YouTube", y: 24 },
      { label: "Twitter", y: 29 },
      { label: "Facebook", y: 73 }
    ]
  }]

  private lineData = [{
    type: "line",
    xValueFormatString: "####",
    yValueFormatString: "$#,###.##",
    dataPoints: [
      { x: 1980, y: 2500582120 },
      { x: 1981, y: 2318922620 },
      { x: 1982, y: 2682595570 },
      { x: 1983, y: 3319952630 },
      { x: 1984, y: 3220180980 },
      { x: 1985, y: 4627024630 },
      { x: 1986, y: 6317198860 },
      { x: 1987, y: 7653429640 },
      { x: 1988, y: 9314027340 },
      { x: 1989, y: 11377814830 },
      { x: 1990, y: 9379751620 },
      { x: 1991, y: 11185055410 },
      { x: 1992, y: 10705343270 },
      { x: 1993, y: 13764161445.9 },
      { x: 1994, y: 14470193647.6 },
      { x: 1995, y: 17087721440.6 },
      { x: 1996, y: 19594314507.7 },
      { x: 1997, y: 21708247148.4 },
      { x: 1998, y: 25445271790 },
      { x: 1999, y: 33492125981.9 },
      { x: 2000, y: 30963463195.2 },
      { x: 2001, y: 26815924144.7 },
      { x: 2002, y: 22770427533.4 },
      { x: 2003, y: 31253989239.5 },
      { x: 2004, y: 36677497452.5 },
      { x: 2005, y: 40439926591.3 },
      { x: 2006, y: 49993998569.1 },
      { x: 2007, y: 60305010382.7 },
      { x: 2008, y: 32271465666.7 },]
     
  }]


  barChartSelected?: boolean = false;

  toggleBarChart():void{
    this.barChartSelected = !this.barChartSelected;
  }

  getBarData(){
    return this.barData;
  }
  
  getLineData(){
    return this.lineData;
  }

  getSelectedChart(){
    return this.barChartSelected;
  }

  addLineChartData(x: number, y: number): void {
    this.lineData[0].dataPoints.push({x: x, y: y})
  }

  addBarChartData(newLabel:string, newY: number): void {
    this.barData[0].dataPoints.push({label: newLabel, y: newY})
  }

 removeBarChartData(index: number){
    this.barData[0].dataPoints.splice(index, 1)
  }

  removeLineChartData(index: number){
    this.lineData[0].dataPoints.splice(index, 1)
  }

}


