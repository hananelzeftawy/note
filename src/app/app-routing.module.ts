import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path:"",redirectTo:"signIn",pathMatch:"full"},
  {path:"signUp",component:RegisterationComponent},
  {path:"signIn",component:LoginComponent},
  {path:"profile",component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
