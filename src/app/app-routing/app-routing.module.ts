import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
    {path:'',component:LoginComponent},
    {path: 'dashboard',component:DashboardComponent},
    {path : 'login',component:LoginComponent},
    {path : 'register',  component:RegistrationComponent}
];

@NgModule({
    imports: [FormsModule,RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  