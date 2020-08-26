import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  singleuser = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
     this.getSingleUser();
  }

  getSingleUser(){
    this.http.get('https://reqres.in/api/users/2').subscribe((dt1: any) =>{
      this.singleuser.push(dt1.data);
      console.log(this.singleuser);
    })
  }


}
