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
  }

  it() {
    this.itdepartment = true;
    this.hrdepatment = false;
    this.qcdepartment = false;
    this.trainy = false;

  }
  qc() {
    this.itdepartment = false;
    this.hrdepatment = false;
    this.qcdepartment = true;
    this.trainy = false;    
  }
  hr() {
    this.itdepartment = false;
    this.hrdepatment = true;
    this.qcdepartment = false;
    this.trainy = false;
  }
  TRAINY() {
    this.itdepartment = false;
    this.hrdepatment = false;
    this.qcdepartment = false;
    this.trainy = true;
  }
}
