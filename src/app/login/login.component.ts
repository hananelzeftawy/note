import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService:AuthService,private _Router:Router) { 
   
  }
  loginForm:any =new FormGroup({
    "email":new FormControl(null,[Validators.required,Validators.email]),
    "password":new FormControl(null),

    })

    login(data:any)
    {
       this._AuthService.signIn(data.value).subscribe((data)=>{
         console.log(data)
         if(data.message == "success")
         {
         localStorage.setItem("token",JSON.stringify(data.token))
         this._AuthService.currentUser.next(true);
          this._Router.navigate(['/profile'])
         
         }
       })
    }
  ngOnInit(): void {
   
  }

}
