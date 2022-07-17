import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logout:any;
  check:boolean=true
  constructor(public _AuthService:AuthService,public _Router:Router) {
    
  
  }
   
      
logoutFun()
{
this._AuthService.logout()
}
 
  ngOnInit(): void {
    
    this._AuthService.currentUser.subscribe(()=>{
      this.check= this._AuthService.currentUser.getValue();
    })
  }

}
