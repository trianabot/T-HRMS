import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Injectable()
export class AuthService {
  //$isLoggedIn = new EventEmitter()<any>();
  $isLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  user:any;

  
  constructor(private http: HttpClient,httpbackend: HttpBackend) {
    this.http = new HttpClient(httpbackend);
  }
  setUserName(data) {
    this.$isLoggedIn.emit(data);
  }
  userLogin(data){
    return this.http.post('http://localhost:2020/user/login',data);
  }
  getuserrole(){
    return this.http.get('http://localhost:2020/user/getuserrole');
  }
  register(data){
    return this.http.post('http://localhost:2020/user/registeruser',data);
  }

  logout(data){
    return this.http.post('http://localhost:2020/user/logout',data);
  }
  onbording(data){
    return this.http.post('http://localhost:2020/user/onbording',data);
  }
  getemployees(){
    return this.http.get('http://localhost:2020/user/getemployees');
  }
}
