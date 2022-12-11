import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  constructor(private datSer: DataService) { }

  data = this.datSer.getLineData();

  //get line chart data on load
  ngOnInit(): void {
    this.data = this.datSer.getLineData();
  }

  chart: any;

  
	//information for charts
	chartOptions = {
		theme: "light2",
		animationEnabled: true,
		zoomEnabled: true,
		axisY: {
			labelFormatter: (e: any) => {
				var suffixes = ["", "K", "M", "B", "T"];
 
				var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
				if(order > suffixes.length - 1)
					order = suffixes.length - 1;
 
				var suffix = suffixes[order];
				return (e.value / Math.pow(1000, order)) + suffix;
			}
		},
		data: this.data
	}

}
