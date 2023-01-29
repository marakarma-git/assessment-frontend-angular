import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';
import { EmployeeIndexComponent } from './employee-index/employee-index.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/app/shared/shared.module';


import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

const routes : Routes = [
  {
    path:'',
    component:EmployeeComponent,
    children:[
      {path:'employee/index', component:EmployeeIndexComponent},
      {path:'employee/create', component:EmployeeCreateComponent},
      {path:'employee/:id/update', component:EmployeeUpdateComponent},
      {path:'employee/:id/detail', component:EmployeeDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeUpdateComponent,
    EmployeeCreateComponent,
    EmployeeIndexComponent,
    EmployeeDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    SharedModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    CurrencyPipe
  ],
  providers:[
    CurrencyPipe
  ]
})
export class EmployeeModule { }
