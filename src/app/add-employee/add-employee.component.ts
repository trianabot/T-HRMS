import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth_service/auth.service';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  onBordingForm: FormGroup;
  officialForm: FormGroup;
  salaryForm: FormGroup;
  pfForm: FormGroup;
  OFFICIAL: boolean = false;
  personalDetailObj: any;
  officialDetailsObj: any;
  pfDetailsObj: any;
  salaryDetailsObj: any;
  // registerForm: FormGroup;
  submitted = false;

  PF: boolean = false;
  SALARY: boolean = false;
  PERSONAL: boolean = false;
  OTHERS: boolean = false;
  status: boolean = false;
  status1: boolean = false;
  status2: boolean = false;
  status3: boolean = false;

  ActivePF: boolean;
  ActiveEsi: boolean;

  constructor(private fb: FormBuilder, private authservice: AuthService) {
    this.onBordingForm = this.fb.group({
      companyId: ['', Validators.required],
      empName: ['', Validators.required],
      dateofbirth: ['', Validators.required],
      address1: ['', Validators.required],
      city: ['', Validators.required],
      emailId: ['', Validators.required],
      phone: ['', Validators.required],
      mobile: ['', Validators.required],
      emergency: ['', Validators.required],
      panNumber: ['', Validators.required],
      aadhaarNo: ['', Validators.required],
      taxStatus: ['',],
      state: ['',],
      gender: ['',],

    })
    this.officialForm = this.fb.group({
      joinDate: ['', Validators.required],
      bankAccount: ['',],
      ess: [''],
      confirmation: ['',],
      jobType: ['',],
      paymentMode: ['',],
      location: ['',],
      department: ['',],
      Designation: ['',],
    })
    this.pfForm = this.fb.group({
      pfUan: ['', Validators.required],
      pfNumber: ['',],
      pfEnroleDate: ['',],
      epfNumber: ['',],
      Relationship: ['',]
    })
    this.salaryForm = this.fb.group({

      esiNumber: ['',],
      ctc: ['',],
      fbp: ['',],
      variablePay: ['',],
      total: ['',],
      differenceAmount: [''],
      productType: ['',],
    })
  }

  ngOnInit() {
    this.PERSONAL = true;
    this.OTHERS = false;
    this.OFFICIAL = false;
    this.PF = false;
    this.SALARY = false;
    this.status = !this.status;
  }

  official(value) {
    this.personalDetailObj = value;
    console.log(value);
    this.onBordingForm = this.onBordingForm;
    this.OFFICIAL = true;
    this.PF = false;
    this.SALARY = false;
    this.PERSONAL = false;
    this.OTHERS = false;

    this.status = true;
    this.status1 = !this.status1;
    this.status2 = false;
    this.status3 = false;
  }
  personal() {
    this.OFFICIAL = false;
    this.PF = false;
    this.SALARY = false;
    this.PERSONAL = true;
    this.OTHERS = false;


    this.status1 = false;
    this.status = !this.status;
    this.status2 = false;
    this.status3 = false;

  }
  salary(value) {
    this.pfDetailsObj = value;
    console.log(value);
    this.OFFICIAL = false;
    this.PF = false;
    this.SALARY = true;
    this.PERSONAL = false;
    this.OTHERS = false;


    this.status1 = true;
    this.status3 = !this.status3;
    this.status2 = true;
    this.status = true;

  }
  pf(value) {
    this.officialDetailsObj = value;
    console.log(value);
    this.OFFICIAL = false;
    this.PF = true;
    this.SALARY = false;
    this.PERSONAL = false;
    this.OTHERS = false;


    this.status2 = !this.status2;
    this.status = true;
    this.status1 = true;
    this.status3 = false;
  }
  EnablePF() {
    this.ActivePF = true;
  }
  EnableESI() {
    this.ActiveEsi = true;
  }
  nextform() {

  }

  get f() { return this.onBordingForm.controls; }
  onSubmit(value) {
    this.salaryDetailsObj = value;
    // console .log(value);
    console.log(this.personalDetailObj, this.officialDetailsObj, this.pfDetailsObj, this.salaryDetailsObj);
    let obj = {
      companyId: this.personalDetailObj.companyId,
      empName: this.personalDetailObj.empName,
      dateofbirth: this.personalDetailObj.dateofbirth,
      address1: this.personalDetailObj.address1,
      city: this.personalDetailObj.city,
      emailId: this.personalDetailObj.emailId,
      phone: this.personalDetailObj.phone,
      mobile: this.personalDetailObj.mobile,
      emergency: this.personalDetailObj.emergency,
      panNumber: this.personalDetailObj.panNumber,
      aadhaarNo: this.personalDetailObj.aadhaarNo,
      taxStatus: this.personalDetailObj.taxStatus,
      state: this.personalDetailObj.state,
      gender: this.personalDetailObj.gender,
      joinDate: this.officialDetailsObj.joinDate,
      bankAccount: this.officialDetailsObj.bankAccount,
      ess: this.officialDetailsObj.ess,
      confirmation: this.officialDetailsObj.confirmation,
      jobType: this.officialDetailsObj.jobType,
      paymentMode: this.officialDetailsObj.paymentMode,
      location: this.officialDetailsObj.location,
      department: this.officialDetailsObj.department,
      Designation: this.officialDetailsObj.Designation,
      pfUan: this.pfDetailsObj.pfUan,
      pfNumber: this.pfDetailsObj.pfNumber,
      pfEnroleDate: this.pfDetailsObj.pfEnroleDate,
      epfNumber: this.pfDetailsObj.epfNumber,
      Relationship: this.pfDetailsObj.Relationship,
      esiNumber: this.salaryDetailsObj.esiNumber,
      ctc: this.salaryDetailsObj.ctc,
      fbp: this.salaryDetailsObj.fbp,
      variablePay: this.salaryDetailsObj.variablePay,
      total: this.salaryDetailsObj.total,
      differenceAmount: this.salaryDetailsObj.differenceAmount,
      productType: this.salaryDetailsObj.productType,
    }
    this.submitted = true;
    //console.log("onbording form value",this.onBordingForm.value);
    this.authservice.onbording(obj).subscribe(data => {
      console.log("data from onbording service", data['data']);
      this.onBordingForm.reset();
    }, err => {
      console.log("err from onbording service", err);
    })
  }
  cancelService() {
    this.onBordingForm.reset();
  }

}
