import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  signup(form: NgForm){
    
    let {confirmPassword, email, firstName, lastName, password} = form.value


    //verificar si los campos estan vacios
    if(!confirmPassword || !email || !firstName || !lastName || !password){
      alert("Diligencie todos los datos")
      return
    }

    //verificar si las contraseñas coinsiden
    if(password !== confirmPassword){
      alert("Las contraseñas no coinciden")
      return
    }

    //enviar la informacion al backend
    this.userService.signup({email, firstName, lastName, password}).subscribe(
      (data: any) => {
        alert(data.status)

        //resetear formulario
        form.reset()
        this.userService.currentUser = new User()
      }, 
      (error) => {
        alert(error.error.status)
      }
    )
    
    
  }

}
