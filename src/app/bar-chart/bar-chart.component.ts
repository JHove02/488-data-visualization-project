import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  chart: any;
	
  chartOptions = {
    title:{
      text: "Total Impressions by Platforms"
    },
    animationEnabled: true,
    axisY: {
      includeZero: true,
      suffix: "K"
    },
    data: [{
      type: "bar",
      indexLabel: "{y}",
      yValueFormatString: "#,###K",
      dataPoints: [
        { label: "Snapchat", y: 15 },
        { label: "Instagram", y: 20 },
        { label: "YouTube", y: 24 },
        { label: "Twitter", y: 29 },
        { label: "Facebook", y: 73 }
      ]
    }]
  }

}
