import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

declare var $:any;
@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {
  flag:boolean
  isClicked:boolean;
  constructor(private _AuthService:AuthService) { 
    this.flag=false
    this.isClicked=false
  }
  exist:boolean=false
  registerForm:any =new FormGroup({
  "first_name":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  "last_name":new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(8)]),
  "email":new FormControl(null,[Validators.required,Validators.email]),
  "password":new FormControl(null),
  "age": new FormControl(null)
  })
signUp:boolean=true;
waiting:boolean=false
  register()
  {
    this.isClicked=true
    if(this.registerForm.valid)
     this._AuthService.signUp(this.registerForm.value).subscribe((data)=>{
       console.log(data)
       if(data.message == "success")
       {
  this.flag=true
 this.isClicked=false
       }
       else
       {
          this.exist=true
       }
     })
     
  }

  ngOnInit(): void {
    $('#signUp').particleground();

  }

}
