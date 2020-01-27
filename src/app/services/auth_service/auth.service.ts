import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,httpbackend: HttpBackend) {
    this.http = new HttpClient(httpbackend);
  }
  addService(data){
    return this.http.post('http://localhost:2020/user/login',data);
  }
  getuserrole(){
    return this.http.get('http://localhost:2020/user/getuserrole');
  }
  register(data){
    return this.http.post('http://localhost:2020/user/registeruser',data);
  }
}
