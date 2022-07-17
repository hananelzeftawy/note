import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  currentUser:any = new BehaviorSubject<boolean>(false);



  BaseUrl="https://routeegypt.herokuapp.com/"


  constructor(private _HttpClient:HttpClient,private _Router:Router) {

  }



  signUp(data:any):Observable<any>
  {
    return this._HttpClient.post(`${this.BaseUrl}signup`,data)
  }

  signIn(data:any):Observable<any>
  {
    return this._HttpClient.post(this.BaseUrl+"signin",data)
  }

  logout()
  {
    localStorage.removeItem("token");
    this.currentUser.next(false)
    this._Router.navigate(['/signIn'])
  }
}
