import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarChartComponent } from '../bar-chart/bar-chart.component';
import { ChartChoicesComponent } from '../chart-choices/chart-choices.component';
import { DataOptionsComponent } from '../data-options/data-options.component';
import { LineChartComponent } from '../line-chart/line-chart.component';

const routes: Routes = [
  {path: "data-options", component:DataOptionsComponent},
  {path: "bar-chart", component:BarChartComponent},
  {path: "chart-choices", component: ChartChoicesComponent},
  {path: "line-chart", component:LineChartComponent},
  {path: "", component:BarChartComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
