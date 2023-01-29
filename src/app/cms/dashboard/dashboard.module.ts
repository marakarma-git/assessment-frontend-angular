import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardChartComponent } from './dashboard-chart/dashboard-chart.component';
import { DashboardIndexComponent } from './dashboard-index/dashboard-index.component';
import { DashboardComponent } from './dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';

const routes : Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {path:'dashboard/index', component:DashboardIndexComponent},
      {path:'dashboard/chart', component:DashboardChartComponent}
    ]
  }
]

@NgModule({
  declarations: [
    DashboardChartComponent,
    DashboardIndexComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    SharedModule
  ]
})
export class DashboardModule { }
