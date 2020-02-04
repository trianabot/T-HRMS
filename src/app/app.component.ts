import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth_service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hrms';
  isActive: boolean;
  loggedInUser: any;
  constructor(private authservice: AuthService) { }
  ngOnInit() {
    this.isActive = JSON.parse(sessionStorage.getItem("isActive"));
    this.loggedInUser = sessionStorage.getItem("userId");
    this.authservice.$isLoggedIn.subscribe(data => {
      
      this.isActive = data['isActive'];
      this.loggedInUser = data['userId'];
    });
  }
  ngOnDestroy() {
    console.log("after", sessionStorage.clear());
  }
}
