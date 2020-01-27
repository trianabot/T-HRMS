import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }
baseUIdata = false;
 data = false;
 component = false;
 accountinfo = false;
 uicomponentsdata = false;
 accountdata = false;
 Otherinfo= false;
 Otherdata = false;
  ngOnInit() {
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

}
