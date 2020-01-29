import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { AuthService } from 'src/app/services/auth_service/auth.service';
import { Router } from '@angular/router';
import { NaveEvetsService } from 'src/app/services/nave-evets.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
show =  false;
message = false;
bellinfo = false;
circleinfo = false;
userinfo = false;
success = false;

public sideNavCloseEvent:Event;

belldata = false;
circledata = false;
userdata = false;
isLoginCom=false;
isActive:boolean;
loggedInUser:any;
  constructor(private authservice:AuthService,private router:Router, private naveCloseService:NaveEvetsService) { }

  ngOnInit() {
    // this.dropdown();
    this.isActive=JSON.parse(sessionStorage.getItem("isActive"));
    this.loggedInUser=sessionStorage.getItem("userId");
   this.authservice.$isLoggedIn.subscribe(data => {
    this.isActive = data['isActive'];
 this.loggedInUser=data['userId'];
  });
  }
  clickEvent(){
    this.message = ! this.message;
    if(this.message){
      this.show = true;
      this.belldata = false;
      this.circledata = false;
      this.userdata = false;
    }
    else{
      this.show = false;
      this.belldata = false;
      this.circledata = false;
      this.userdata = false;
    }
    
    // alert("hi");
  }
  clear(){
    this.show= false;
    this.belldata = false;
  }
  bell(){
    this.bellinfo =! this.bellinfo;
    if(this.bellinfo){
      this.belldata = true;
      this.userdata = false;
      this.show = false;
      this.circledata = false;
    }
    else{
      this.belldata = false;
    this.userdata = false;
    this.show = false;
    this.circledata = false;
    }
    
  }
  circle(){
this.circleinfo = ! this.circleinfo;
if(this.circleinfo){
  this.circledata = true;
  this.show = false;
  this.userdata = false;
  this.belldata = false;
}
else{
  this.circledata = false;
  this.show = false;
  this.userdata = false;
  this.belldata = false;
}
   
  }
  userprofile(){
    this.userinfo = ! this.userinfo;
    if(this.userinfo){
      this.circledata = false;
      this.show = false;
      this.belldata = false;
      this.userdata = true;
    }
    else{
      this.circledata = false;
    this.show = false;
    this.belldata = false;
    this.userdata = false;
    }
    
  }
  header(){
  
    this.success = ! this.success;
    if(this.success){
      document.getElementById("change").style.width = "4rem";
    }
    else{
      document.getElementById("change").style.width = "15rem";
    }
    this.naveCloseService.closeNaveAction(this.success);
  }
logout(){
    let obj ={
      emailId:sessionStorage.getItem("emailId"),
      isActive:JSON.parse(sessionStorage.getItem("isActive")),
    }
    this.authservice.logout(obj).subscribe(data=>{
      sessionStorage.clear();
      console.log("logout successfully");
      this.router.navigate(['/login'])
    },err=>{
      console.log("error logout ");
    })
  }
}
