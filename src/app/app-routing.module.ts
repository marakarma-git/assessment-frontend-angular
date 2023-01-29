import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  },
  {
    path:'auth',
    loadChildren: ()=> import('./auth/auth.module').then(module=>module.AuthModule)
  },
  {
    path:'cms',
    loadChildren: ()=> import('./cms/cms.module').then(module=>module.CmsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
