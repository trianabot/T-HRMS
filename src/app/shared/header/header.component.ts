import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
show =  false;
belldata = false;
circledata = false;
userdata = false;
isLoginCom=false;
  constructor() { }

  ngOnInit() {
    // this.dropdown();
   this.isLoginCom=JSON.parse(sessionStorage.getItem("isLoginCom"));
   console.log("header",this.isLoginCom);
  }
  clickEvent(){
    this.show = true;
    this.belldata = false;
    this.circledata = false;
    this.userdata = false;
    // alert("hi");
  }
  clear(){
    this.show= false;
    this.belldata = false;
  }
  bell(){
    this.belldata = true;
    this.userdata = false;
    this.show = false;
    this.circledata = false;
  }
  circle(){
    this.circledata = true;
    this.show = false;
    this.userdata = false;
    this.belldata = false;
  }
  userprofile(){
    this.circledata = false;
    this.show = false;
    this.belldata = false;
    this.userdata = true;
  }
}
