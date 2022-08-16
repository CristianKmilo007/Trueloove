import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './views/home/home.component';
import { SignupComponent } from './views/signup/signup.component';
import { PleasuresComponent } from './views/pleasures/pleasures.component';
import { SettingsComponent } from './views/settings/settings.component';
import { MatchComponent } from './views/match/match.component';
import { SearchPartnerComponent } from './views/search-partner/search-partner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AyudaComponent } from './views/ayuda/ayuda.component';
import { PreferencesComponent } from './views/preferences/preferences.component';
import { MatchAllComponent } from './views/match-all/match-all.component';
import { PerfilComponent } from './views/perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    PleasuresComponent,
    SettingsComponent,
    MatchComponent,
    SearchPartnerComponent,
    NavbarComponent,
    AyudaComponent,
    PreferencesComponent,
    MatchAllComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
