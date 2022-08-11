import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public userService : UserService, public router:Router) { }

  ngOnInit(): void {
    this.userService.currentUser = new User()
  }

  login(form: NgForm){

    let {email, password} = form.value

    if (!email || !password){
      alert("Debe diligenciar todos los campos")
      return
    }

    this.userService.login({email, password}).subscribe(
      (data: any) => {
        localStorage.setItem("token", data.token)
        this.router.navigate(["/search-partner"])
      }, 
      (error) => {
        alert(error.error.status)

      }
    )
  }

}
