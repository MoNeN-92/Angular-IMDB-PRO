import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private users : UserService) { }

  ngOnInit(): void {
  }
  logIn(data:any){
// console.log(data);

  }



  

}
