import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'http://localhost:49189/auth/'

  constructor(private http: HttpClient) { }

  register(user){
    return this.http.post(this.baseUrl+'register', user);
  }

  login(user){
    return this.http.post(this.baseUrl+'login', user);
  }

  get getUserName(){
    return localStorage.getItem('userName');
  }

  get isAuthenticated(){
    return !!localStorage.getItem('token_value');
  }

  logout(){
    localStorage.removeItem('userName');
    localStorage.removeItem('token_value');
  }
}
