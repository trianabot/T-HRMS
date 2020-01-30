import { Component, Input, EventEmitter, Output,OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';
import{AuthService} from '../services/auth_service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent implements OnInit {
  onBoardForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
  }

}
