import { Component, Input, EventEmitter, Output,OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import{AuthService} from '../../services/auth_service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLoginCom:boolean=false;
  loginForm:FormGroup;
  @Output() valueChange = new EventEmitter();
  constructor(private formBuilder:FormBuilder,private authservice:AuthService,private rouetr:Router) { }

  ngOnInit() {
    this.isLoginCom=false;
    sessionStorage.setItem("isLoginCom",JSON.stringify(this.isLoginCom));
    this.loginForm=this.formBuilder.group({
      emailId:['',Validators.required],
      password:['',Validators.required],
      isActive:[true]
    });
  }
  onSubmit(){
    console.log("this.loginForm.value",this.loginForm.value);
    this.authservice.userLogin(this.loginForm.value).subscribe(data=>{
     if(data['userData'].isActive==true){
     sessionStorage.setItem("isActive",JSON.stringify(data['userData'].isActive));
     sessionStorage.setItem("userId",data['userData'].userId);
     sessionStorage.setItem("emailId",data['userData'].emailId);
     let sendData={
      isActive: data['userData'].isActive,
      userId:data['userData'].userId
    }

    this.authservice.setUserName(sendData);
     this.rouetr.navigate(['/dashboard']);
     }else{
      this.rouetr.navigate(['/errorpage']); 
     }
    },err=>{
      console.log("err login",err);
    })
  }



}
