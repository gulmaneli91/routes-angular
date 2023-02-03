import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './page/about/about.component';
import { ErrorComponent } from './page/error/error.component';
import { HomeComponent } from './page/home/home.component';

const routes: Routes = [
  { path:"", component: HomeComponent, pathMatch: 'full' },
  { path:'sobre', component:AboutComponent, children: [
    {path: 'alt',component:AboutComponent }
  ]},
  {path: 'dashboard', 
  loadChildren: ()=> import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  { path:"404", component:ErrorComponent},
  { path:"**", redirectTo:'404'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
