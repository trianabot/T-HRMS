import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  onBordingForm:FormGroup;
  OFFICIAL: boolean=false;
  PF: boolean=false;
  SALARY: boolean=false;
  PERSONAL: boolean=false;
  OTHERS:boolean=false;
  status : boolean = false;
  status1 : boolean = false;
  status2 : boolean = false;
  status3 : boolean = false;
  constructor(private fb:FormBuilder) {
    this.onBordingForm=this.fb.group({
      companyId:['',Validators.required],
      empName:['',Validators.required],
      dateofbirth:['',Validators.required],
      address1:['',Validators.required],
      address2:['',Validators.required],
      city:['',Validators.required],
      emailId:['',Validators.required],
      phone:['',Validators.required],
      mobile:['',Validators.required],
      emergency:['',Validators.required],
      panNumber:['',Validators.required],
      aadhaarNo:['',Validators.required],
      joinDate:['',Validators.required],
      bankAccount:['',],
      ess:[''],
      confirmation:['',],
      pfUan:['',],
      pfNumber:['',],
      pfEnroleDate:['',],
      epfNumber:['',],
      esiNumber:['',],
      ctc:['',],
      fbp:['',],
      Pay :[''],
      total:['',],
      differenceAmount:['',],
      productType:['',],
      taxStatus : ['',],
      state : ['',],
      gender : ['',],
      jobType : ['',],
      paymentMode : ['',],
      location :['',],
      department : ['',],
      Designation : ['',],
      Relationship : ['',],
     
    })
   }

  ngOnInit() {
    this.PERSONAL=true;
    this.OTHERS=false;
    this.OFFICIAL=false;
    this.PF=false;
    this.SALARY=false;

    this.status = ! this.status;
  
   
  }

  official() {
    this.OFFICIAL=true;
    this.PF=false;
    this.SALARY=false;
    this.PERSONAL=false;
    this.OTHERS=false;

    this.status1 = ! this.status1;
    this.status = false;
    this.status2 = false;
    this.status3 = false;
  }
  personal(){
    this.OFFICIAL=false;
    this.PF=false;
    this.SALARY=false;
    this.PERSONAL= true;
    this.OTHERS=false;

    this.status1 = false;
    this.status = ! this.status;
    this.status2 = false;
    this.status3 = false;
  }
  salary(){
    this.OFFICIAL=false;
    this.PF=false;
    this.SALARY=true;
    this.PERSONAL=false;
    this.OTHERS=false;

    this.status1 = false;
    this.status = false;
    this.status2 = false;
    this.status3 = ! this.status3;
  }
  pf(){
    this.OFFICIAL=false;
    this.PF=true;
    this.SALARY=false;
    this.PERSONAL=false;
    this.OTHERS=false;

    this.status2 = ! this.status2;
    this.status = false;
    this.status1 = false;
    this.status3 = false;
    }
  // others(){
  //   this.OTHERS=true;
  //   this.OFFICIAL=false;
  //   this.PF=false;
  //   this.SALARY=false;
  //   this.PERSONAL=false;
  // }
  onSubmit(){
    console.log("onbording form value",this.onBordingForm.value);
  }
 
}
