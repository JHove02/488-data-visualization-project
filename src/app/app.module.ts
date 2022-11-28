import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import * as CanvasJSAngularChart from '../assets/canvasjs.angular.component';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HeaderComponent } from './header/header.component';
import { DataOptionsComponent } from './data-options/data-options.component';
import { ChartChoicesComponent } from './chart-choices/chart-choices.component';
import { RoutingModule } from './routing/routing.module';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvasJSChart,
    BarChartComponent,
    HeaderComponent,
    DataOptionsComponent,
    ChartChoicesComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
