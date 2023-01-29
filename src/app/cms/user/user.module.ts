import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserIndexComponent } from './user-index/user-index.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserUpdateComponent } from './user-update/user-update.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {path:'user/index',component:UserIndexComponent},
      {path:'user/create',component:UserCreateComponent},
      {path:'user/:id/update',component:UserUpdateComponent},

    ]
  }
]

@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent,
    UserIndexComponent,
    UserCreateComponent,
    UserUpdateComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    RouterModule.forChild(routes),
    SharedModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule
  ]
})
export class UserModule { }
