import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {

  }

  updatePerfil(form: NgForm){
    
    let {firstName,
      secondName,
      surName,
      secondsurName,
      description,
      phone} = form.value
      
      console.log(form.value)

  
    //enviar la informacion al backend
    this.userService.updatePerfil({firstName,
      secondName,
      surName,
      secondsurName,
      description,
      phone}).subscribe(
      (data: any) => {
        alert(data.status)

      }, 
      (error) => {
        alert(error.error.status)
      }
    )
    
  }

}
