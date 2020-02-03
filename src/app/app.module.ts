import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { ConfirmationComponent } from './auth/confirmation/confirmation.component';
import { RegistrtaionComponent } from './auth/registrtaion/registrtaion.component';
import { HTTP_INTERCEPTORS ,HttpClientModule} from '@angular/common/http';
import { IntersepterService } from './services/auth_service/intersepter.service';
import { AuthService } from './services/auth_service/auth.service';
import { NotfoundComponent } from './errorpage/notfound/notfound.component';
import { ClientComponent } from './client/client.component';
import { DeptComponent } from './dept/dept.component';
import { ProjectComponent } from './project/project.component';
import { EmpComponent } from './emp/emp.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { NbThemeModule } from '@nebular/theme';
import {MatTabsModule} from '@angular/material';
import { EmpOverviewComponent } from './emp-overview/emp-overview.component';
import { HRDepartmentComponent } from './hrdepartment/hrdepartment.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    ConfirmationComponent,
    RegistrtaionComponent,
    NotfoundComponent,
    ClientComponent,
    DeptComponent,
    ProjectComponent,
    EmpComponent,
    AddEmployeeComponent,
    EmpOverviewComponent,
    HRDepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NbThemeModule,
    MatTabsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: IntersepterService,
    multi: true,
},AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
