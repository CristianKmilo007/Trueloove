import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MatchComponent } from './views/match/match.component';
import { PleasuresComponent } from './views/pleasures/pleasures.component';
import { SettingsComponent } from './views/settings/settings.component';
import { SearchPartnerComponent } from './views/search-partner/search-partner.component';
import { SignupComponent } from './views/signup/signup.component';
import { UserGuard } from './guards/user.guard';
import { AyudaComponent } from './views/ayuda/ayuda.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "signup", component: SignupComponent},
  {path: "pleasures", component: PleasuresComponent},
  {path: "match", component: MatchComponent},
  {path: "search-partner", component: SearchPartnerComponent, canActivate: [UserGuard]},
  {path: "settings", component: SettingsComponent, canActivate: [UserGuard]},
  {path: "ayuda", component: AyudaComponent, canActivate: [UserGuard]},

  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
