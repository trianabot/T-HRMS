import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginCom:boolean=false;
  constructor() { }

  ngOnInit() {
    this.isLoginCom=false;
    sessionStorage.setItem("isLoginCom",JSON.stringify(this.isLoginCom));
   console.log("this.isLoginCom",this.isLoginCom);
  }

}
