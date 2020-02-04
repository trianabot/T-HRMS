import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { ConfirmationComponent } from './auth/confirmation/confirmation.component';
import { RegistrtaionComponent } from './auth/registrtaion/registrtaion.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './errorpage/notfound/notfound.component';
import { ClientComponent } from './client/client.component';
import { DeptComponent } from './dept/dept.component';
import { ProjectComponent } from './project/project.component';
import { EmpComponent } from './emp/emp.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmpOverviewComponent } from './emp-overview/emp-overview.component';
import { HRDepartmentComponent } from './hrdepartment/hrdepartment.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'',component:LoginComponent},
  {path:'registration',component:RegistrtaionComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'errorpage',component:NotfoundComponent},
  {path:'login',component:LoginComponent},
  {path:'client',component:ClientComponent},
  {path:'dept',component:DeptComponent},
  {path:'project',component:ProjectComponent},
  {path:'emp',component:EmpComponent},
  {path:'addemployee', component:AddEmployeeComponent},
  {path:'empoverview/:empId', component:EmpOverviewComponent},
  {path:'HrDept', component:HRDepartmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
