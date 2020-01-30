import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  OFFICIAL: boolean;
  PF: boolean;
  SALARY: boolean;
  PERSONAL: boolean;
  OTHERS:boolean;
  constructor() { }

  ngOnInit() {
    this.OTHERS=false;
    this.OFFICIAL=false;
    this.PF=false;
    this.SALARY=false;
    this.PERSONAL=true;
  }

  official() {
    this.OFFICIAL=true;
    this.PF=false;
    this.SALARY=false;
    this.PERSONAL=false;
    this.OTHERS=false;
  }
  personal(){
    this.OFFICIAL=false;
    this.PF=false;
    this.SALARY=false;
    this.PERSONAL= true;
    this.OTHERS=false;
  }
  salary(){
    this.OFFICIAL=false;
    this.PF=false;
    this.SALARY=true;
    this.PERSONAL=false;
    this.OTHERS=false;
  }
  pf(){
    this.OFFICIAL=false;
    this.PF=true;
    this.SALARY=false;
    this.PERSONAL=false;
    this.OTHERS=false;
    }
  others(){
    this.OTHERS=true;
    this.OFFICIAL=false;
    this.PF=false;
    this.SALARY=false;
    this.PERSONAL=false;
  }
 
}
