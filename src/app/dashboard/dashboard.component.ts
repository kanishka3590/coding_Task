import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  student=[
{   id:"1",
    name:"Rahul Sharma",
    email:"rahulsharma@live.com",
    class:"MCA",
    year:"2012",
    city:"Noida",
    country:"India"
  },
  {   id:"2",
    name:"Priya Mathur Saxena",
    email:"priya@priya.com",
    class:"Btech",
    year:"2009",
    city:"Gurgaon",
    country:"India"
  },
  {   id:"3",
  name:"Sara Sinha",
  email:"sara@sara.com",
  class:"MCA",
  year:"2012",
  city:"Saharanpur",
  country:"India"
} ];

   edit(i){
    

     //console.log(this.student[i].id);
     document.getElementById("email").setAttribute("value",this.student[i].email);
     document.getElementById("name").setAttribute("value",this.student[i].name);
     document.getElementById("class").setAttribute("value",this.student[i].class);
     document.getElementById("year").setAttribute("value",this.student[i].year);
     document.getElementById("city").setAttribute("value",this.student[i].city);
     document.getElementById("country").setAttribute("value",this.student[i].country);
     document.getElementById("id").setAttribute("value",this.student[i].id);
   }
  delete($event){
    document.getElementById("email").setAttribute("value","g");
     $event.target.value = this.student[0].name ;
    console.log($event.target.value);
     
    
    
  }
    
}
