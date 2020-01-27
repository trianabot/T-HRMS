import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ConfirmationComponent } from './auth/confirmation/confirmation.component';
import { RegistrtaionComponent } from './auth/registrtaion/registrtaion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './errorpage/notfound/notfound.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'registration',component:RegistrtaionComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'errorpage',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
