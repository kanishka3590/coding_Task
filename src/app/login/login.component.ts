import { Component, OnInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  user = {
    email:"",
    pwd:""
  };
  login(){
    if(this.user.email=="user@gmail.com" && this.user.pwd=="123456"){
      this.router.navigate(['/dashboard']);
      console.log("Login Successful!!!");
    }
    else if(this.user.email=="" || this.user.pwd=="")
      console.log("Please Enter Required Fields");
    else if(this.user.email!="user@gmail.com")
      console.log("Please Enter Correct User Name ")
    else if(this.user.pwd!="123456")
      console.log("Wrong Password !!!");
    
  }
  

}
