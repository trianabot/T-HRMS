import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth_service/auth.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  onBordingForm:FormGroup;
  officialForm : FormGroup;
  pfForm : FormGroup;
  OFFICIAL: boolean=false;

  // registerForm: FormGroup;
  submitted = false;

  PF: boolean=false;
  SALARY: boolean=false;
  PERSONAL: boolean=false;
  OTHERS:boolean=false;
  status : boolean = false;
  status1 : boolean = false;
  status2 : boolean = false;
  status3 : boolean = false;

  ActivePF : boolean;
  ActiveEsi : boolean;

  constructor(private fb:FormBuilder,private authservice:AuthService) {
    this.onBordingForm=this.fb.group({
      companyId:['',Validators.required],
      empName:['',Validators.required],
      dateofbirth:['',Validators.required],
      address1:['',Validators.required],
      // // address2:['',Validators.required],
      city:['',Validators.required],
      emailId:['',Validators.required],
      phone:['',Validators.required],
      mobile:['',Validators.required],
      emergency:['',Validators.required],
      panNumber:['',Validators.required],
      aadhaarNo:['',Validators.required],
      
      // esiNumber:['',],
      // ctc:['',],
      // fbp:['',],
      // variablePay:['',],
      // total:['',],
      // differenceAmount:[''],
      // productType:['',],
      taxStatus : ['',],
      state : ['',],
      gender : ['',],
     
    })
    this.officialForm = this.fb.group({
       joinDate:['',Validators.required],
      bankAccount:['',],
      ess:[''],
      confirmation:['',],
      jobType : ['',],
      paymentMode : ['',],
      location :['',],
      department : ['',],
      Designation : ['',],
    })
    this.pfForm = this.fb.group({
    pfUan:['',Validators.required],
      pfNumber:['',],
      pfEnroleDate:['',],
      epfNumber:['',],
       Relationship : ['',]
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
  this. onBordingForm = this.onBordingForm;
    this.OFFICIAL=true;
    this.PF=false;
    this.SALARY=false;
    this.PERSONAL=false;
    this.OTHERS=false;

    this.status = true;
    this.status1 = ! this.status1;
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

    
    this.status1 = true;
    this.status3 = ! this.status3;
    this.status2 = true;
    this.status = true;

  }
  pf(){
    this.OFFICIAL=false;
    this.PF=true;
    this.SALARY=false;
    this.PERSONAL=false;
    this.OTHERS=false;

    
    this.status2 = ! this.status2;
    this.status = true;
    this.status1 = true;
    this.status3 = false;
    }
    EnablePF(){
this.ActivePF = true;
    }
    EnableESI(){
      this.ActiveEsi = true;
    }
    nextform(){

    }

    get f() { return this.onBordingForm.controls; }
  onSubmit(){
    this.submitted = true;
    console.log("onbording form value",this.onBordingForm.value);
    this.authservice.onbording(this.onBordingForm.value).subscribe(data=>{
      console.log("data from onbording service",data['data']);
      this.onBordingForm.reset();
    },err=>{
      console.log("err from onbording service",err);
    })
  }
  OFFICIALForm(){
    this.submitted = true;
  }
  PFForm(){
    this.submitted = true;
  }
  cancelService(){
   this.onBordingForm.reset();
  }
 
}
