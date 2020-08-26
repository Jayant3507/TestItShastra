import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm1: any;
  message: string;
  submitted = false;
  error = false;
  username: string;
  password: string
  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  loginUser ()
  { 
       if(this.username == "jack@gmail.com" && this.password =="jayant@123")
       {
          this.router.navigate[("/home")]
       }
       else{
         alert("Please Enter Valid Details..");
       }
  }

  goToPage(){
    this.router.navigate[("/home")]
  }

}
