import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth_service/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-overview',
  templateUrl: './emp-overview.component.html',
  styleUrls: ['./emp-overview.component.css']
})
export class EmpOverviewComponent implements OnInit {
  empsFullData:any;
  constructor(private authserviced: AuthService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      let empId: string = params['empId'];
      this.getEmpDetailsById(empId);
    });
  }

  getEmpDetailsById(empId) {
    
    this.authserviced.getEmployeeById(empId).subscribe(resp=>{
      this.empsFullData = resp['data'];
    });

  }
}
