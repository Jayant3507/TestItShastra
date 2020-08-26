import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  angsA = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void { 
    this.getUsers();
  }


  getUsers(){
    this.http.get('https://reqres.in/api/users?page=2').subscribe(dt=>{
    this.angsA = dt['data'];
    console.log(this.angsA);
  },
  (error) =>{
    console.log(error); 
  }
  )

}

}
