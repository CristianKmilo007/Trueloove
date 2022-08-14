import { Component, OnInit } from '@angular/core';
import { UserPreferences } from 'src/app/models/userPreference.model';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserPreferencesService } from 'src/app/services/user-preferences.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css'],
})
export class PreferencesComponent implements OnInit {

  constructor(public userService: UserService, public userPreferencesService: UserPreferencesService) { }

  ngOnInit(): void {
  }

  getAllPreferences(){
    this.userPreferencesService.getAllPreferences().subscribe(
      (data: any) => {
        this.userPreferencesService.preferences = data.preferences;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getPreferencesByUser(id: any){

    const user = this.userService.decodeToken()
    const createdBy = user._id

    this.userPreferencesService.getPreferencesByUser(createdBy).subscribe(
      (data: any) => {
        this.userPreferencesService.preferences = data.preferences;
      },
      (error) => {
        console.log(error);
      }
    );
   }

  updatePreferences(userPreferences: UserPreferences){
    this.userPreferencesService.currentPreferences = userPreferences
  }

  createPreferences(form: NgForm){

    if (form.value._id){
    const { _id, Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11, Question12, Question13, Question14, Question15, Question16,Question17 } = form.value
    
    const user = this.userService.decodeToken()
    const created_by = user._id
    console.log(created_by)

    const data = { Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11, Question12, Question13, Question14, Question15, Question16,Question17, created_by }

    this.userPreferencesService.updatePreferences(_id, data).subscribe(
      (data: any)=>{
        alert("Preferencias Actualizadas")
      },
      (error)=> {
        console.log(error)
      }
    )

    return
    }

  const { Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11, Question12, Question13, Question14, Question15, Question16,Question17 } = form.value


  const user = this.userService.decodeToken()._id
  const created_by = user
  console.log(created_by)

  const data = { created_by, Question1, Question2, Question3, Question4, Question5, Question6, Question7, Question8, Question9, Question10, Question11, Question12, Question13, Question14, Question15, Question16,Question17}
  console.log(data)
  
  this.userPreferencesService.createPreferences(data).subscribe(
    (data) => {
      alert("Preferencias Creadas con exito")
      form.reset()
      this.userPreferencesService.currentPreferences = new UserPreferences()
      this.getPreferencesByUser(created_by)
    },
    (error) => {
      console.log(error)
    }
  )

  console.log(form.value);
}
}

