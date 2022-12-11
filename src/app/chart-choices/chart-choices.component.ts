import { Component, DoCheck, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-chart-choices',
  templateUrl: './chart-choices.component.html',
  styleUrls: ['./chart-choices.component.css']
})
export class ChartChoicesComponent implements OnInit{

  constructor(private dataSer: DataService) { }

  //get data from data service
  barData = this.dataSer.getBarData();
  lineData = this.dataSer.getLineData();

  ngOnInit(): void {
  }

  //information for chart previews
  chart: any;
	
  barChartOptions = {
    title:{
      text: "Total Impressions by Platforms"
    },
    animationEnabled: true,
    axisY: {
      includeZero: true,
      labelFormatter: (e: any) => {
				var suffixes = ["", "K", "M", "B", "T"];
 
				var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
				if(order > suffixes.length - 1)
					order = suffixes.length - 1;
 
				var suffix = suffixes[order];
				return (e.value / Math.pow(1000, order)) + suffix;
			}
    },
    data: this.barData
  }

  lineChartOptions = {
		theme: "light2",
		animationEnabled: true,
		zoomEnabled: true,
		title: {
			text: "Market Capitalization of ACME Corp"
		},
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
		data: this.lineData
	}

  //set chart choice string from choose chart buttons
  lineClick():void{
    this.dataSer.setSelectedChart("line");
  }

  barClick():void{
    this.dataSer.setSelectedChart("bar");
  }

}
