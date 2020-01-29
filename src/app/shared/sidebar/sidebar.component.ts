import { Component, OnInit, EventEmitter, DebugElement } from '@angular/core';
import { AuthService } from 'src/app/services/auth_service/auth.service';
import { NaveEvetsService } from 'src/app/services/nave-evets.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  emitPass: EventEmitter<number> = new EventEmitter<number>();

  constructor(private authservice:AuthService, private naveCloseActionService:NaveEvetsService) { }
baseUIdata = false;
 data = false;
 component = false;
 accountinfo = false;
 uicomponentsdata = false;
 accountdata = false;
 Otherinfo= false;
 Otherdata = false;
 isActive:boolean;
 loggedInUser:any;
 success = false;
 public naveCloseData:boolean = false;
  ngOnInit() {
   this.naveCloseActionService.actionSourceObjservable.subscribe((action)=>{
    this.naveCloseData = action;
    if(action){
      document.getElementById("change1").style.width = "4rem";
      document.getElementById("u-nav").style.paddingLeft = "3rem"; 
    }else{
      document.getElementById("change1").style.width = "15rem";
      document.getElementById("u-nav").style.paddingLeft = "14rem" 
    }
   });
  }

 
  baseUI(){
    
     this.data =! this.data ;
    if(this.data){
      this.baseUIdata = true;
    }
    else{
      this.baseUIdata = false;
    }
  }
  uicomponents(){
    this.component = ! this.component;
    if(this.component){
      this.uicomponentsdata = true;
    }
    else{
      this.uicomponentsdata = false;
    }
  }
  account(){
this.accountinfo = ! this.accountinfo;
if(this.accountinfo){
this.accountdata = true;
}
else{
  this.accountdata = false;
}
  }

  // Other(){
  //   this.Otherinfo = ! this.Otherinfo;
  //   if(this.Otherinfo){
  //     this.Otherdata = true;
  //   }
  //   else{
  //     this.Otherdata = false;
  //   }
  // }
  // header(){
    
  //   if(this.naveCloseData){
  //     document.getElementById("change").style.width = "4.5rem";
  //   }
  //   else{
  //     document.getElementById("change").style.width = "15rem";
  //   }
  // }

}
