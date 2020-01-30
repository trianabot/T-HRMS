import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth_service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  onBoardForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  itdepartment: boolean;
  qcdepartment: boolean;
  hrdepatment: boolean;
  trainy: boolean;
  status: boolean = false;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;
  
  ngOnInit() {
    this.itdepartment = true;
    this.hrdepatment = false;
    this.qcdepartment = false;
    this.trainy = false;
    this.status = !this.status;
  }

  it() {
    this.itdepartment = true;
    this.hrdepatment = false;
    this.qcdepartment = false;
    this.trainy = false;

    this.status1 = false;  
    this.status2 = false; 
    this.status3 = false; 
    this.status = ! this.status;      


  }
  qc() {
    this.itdepartment = false;
    this.hrdepatment = false;
    this.qcdepartment = true;
    this.trainy = false; 

    this.status2 = false; 
    this.status1 = ! this.status1; 
    this.status3 = false; 
    this.status = false;    
  }
  hr() {
    this.itdepartment = false;
    this.hrdepatment = true;
    this.qcdepartment = false;
    this.trainy = false;

    this.status3 = false; 
    this.status2 = ! this.status2; 
    this.status1 = false; 
    this.status = false; 
  }
  TRAINY() {
    this.itdepartment = false;
    this.hrdepatment = false;
    this.qcdepartment = false;
    this.trainy = true;

   this.status3 = !this.status3; 
    this.status2 = false; 
    this.status1 = false; 
    this.status = false; 

//     var header = document.getElementById("EmpCenterTab");
// var btns = header.getElementsByClassName("btn1");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementsByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }
  }
  
}
