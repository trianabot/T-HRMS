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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    ConfirmationComponent,
    RegistrtaionComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: IntersepterService,
    multi: true,
},AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
