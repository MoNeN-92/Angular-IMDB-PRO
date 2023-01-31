import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.scss']
})
export class RegUserComponent implements OnInit {

  constructor( private users : UserService) { }

  ngOnInit(): void {
  }
  signUp(data:any){
this.users.userSignUp(data)
console.log(data);


  }
}
