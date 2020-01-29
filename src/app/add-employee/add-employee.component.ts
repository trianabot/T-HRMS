import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  OFFICIAL : any;
  pf : any;
  salary : any;
  personal : any;
  constructor() { }

  ngOnInit() {
  }

  personalinfo(value){
    if(value == "OFFICIAL"){
      this.OFFICIAL = true;
      this.personal = false;
      this.salary = false;
      this.pf = false;
    }
    else if(value == 'personal' ){
this.personal = true;
this.salary = false;
      this.pf = false;
      this.OFFICIAL = false;
    }
    else if (value == 'salary'){
      this.salary = true;
      this.OFFICIAL = false;
      this.personal = false;
      this.pf = false;
    }
    else if('pf'){
      this.pf = true;
      this.OFFICIAL = false;
      this.personal = false;
      this.salary = false;
    }
    
  }
}
