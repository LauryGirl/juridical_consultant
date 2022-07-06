import { Injectable } from '@angular/core';
import { User } from './login';
import { Observable, of } from 'rxjs';
import {map} from 'rxjs';
import { Register } from '../register/register';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})


export class UserService {

  //poner api correcta!!!!! -> enlazar con el backend

  constructor(private http: HttpClient, private cookies: CookieService) { }

  getLogin(user: any): Observable<any>{
    return this.http.post("https://reqres.in/api/login", user);
  }

  register(user: any): Observable<any>{
    return this.http.post("https://reqres.in/api/register", user);
  }

  setToken(token: string){
    this.cookies.set("token", token);
  }

  getToken(){
    return this.cookies.get("token");
  }

  getUser() {
    //aqui poner la api correcta
    return this.http.get("https://reqres.in/api/users/2");
  }
  getUserLogged() {
    const token = this.getToken();
    // Aquí iría el endpoint para devolver el usuario para un token
  } 
}
