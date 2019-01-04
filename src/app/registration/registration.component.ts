import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  users = {
    fname:"",
    mname:"",
    lname:"",
    email:"",
    psw:"",
    cpsw:"",
    pno:""
    
  };
  register(){
  if(!this.users.fname)
    console.log("Please Enter Required Field");
  else if(!this.users.lname)
    console.log("Please Enter Required Field");
  else if(!this.users.email)
    console.log("Please Enter Required Field");
  else if(!this.users.psw)
    console.log("Please Enter Required Field");
  else if(!this.users.cpsw)
    console.log("Please Enter Required Field");
  else{
    if(this.users.psw!=this.users.cpsw)
    console.log("Password and Confirm Password doesn't match.");
    else{
    console.log("Registration successfull !!");
    console.log(this.users);
    this.router.navigate(['/']);
  }
  }
    
 
}
}
