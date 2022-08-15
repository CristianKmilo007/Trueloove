import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { UserPreferences } from '../models/userPreference.model';

@Injectable({
  providedIn: 'root'
})
export class UserPreferencesService {

  URI_PREFERENCES = "http://localhost:5000/api/preferences"
  currentPreferences : UserPreferences
  preferences: any

  constructor(public http: HttpClient) {
    this.currentPreferences = new UserPreferences()
   }

   getPreferencesByUser(id: any){
    return this.http.get(`${this.URI_PREFERENCES}/by-user/${id}`)
   }

   getAllPreferences(){
    return this.http.get(`${this.URI_PREFERENCES}/get-all`)
  }

  getmatch(id: any){
    return this.http.get(`${this.URI_PREFERENCES}/match/${id}`)
  }

  createPreferences(data: any){
    return this.http.post(`${this.URI_PREFERENCES}/createPreferences`, data)
  }

  updatePreferences(id: any, data: any){
    return this.http.put(`${this.URI_PREFERENCES}/update-preferences/${id}`, data)
  }

  matchPreferences(): any{
    return this.http.get(`${this.URI_PREFERENCES}/match/:id`)
  }

}
