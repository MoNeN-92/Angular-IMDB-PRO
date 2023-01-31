import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient, private rout:Router) { }

  userSignUp(profil:any){
this.http.post('http://localhost:3000/profil', profil , {observe:'response'})
.subscribe((res)=>{
  if(res){
    localStorage.setItem('profil', JSON.stringify(res.body))
    this.rout.navigate(['/'])
  }
  
})





}
}
