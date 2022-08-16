import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User
  URI_USERS_BACKEND = "http://localhost:5000/api/users"

  constructor(public http: HttpClient, public router:Router) {
    this.currentUser = new User
  }

  login(credentials:any){
    return this.http.post(`${this.URI_USERS_BACKEND}/login`, credentials)
  }

  signup(formUser:any){
    return this.http.post(`${this.URI_USERS_BACKEND}/signup`, formUser )
  }

  updatePerfil(formUser:any){
    return this.http.put(`${this.URI_USERS_BACKEND}/update/:id`, formUser)
  }

  loggedIn(){
    return localStorage.getItem("token") ? true : false
  }

  logout(){
    localStorage.removeItem("token")
    this.router.navigate(["/home"])
    return
  }

  decodeToken(): any{
    const token = localStorage.getItem("token")
    const decoded = jwtDecode(token ? token : "Error en token")
    return decoded
  }

  getFullName(): string {
    const data = this.decodeToken()
    return `${data.firstName} ${data.surName}`
  }
  
}