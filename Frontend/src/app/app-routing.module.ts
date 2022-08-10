import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MatchComponent } from './views/match/match.component';
import { PleasuresComponent } from './views/pleasures/pleasures.component';
import { SignupComponent } from './views/signup/signup.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "signup", component: SignupComponent},
  {path: "pleasures", component: PleasuresComponent},
  {path: "match", component: MatchComponent},

  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
