import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { ScoreComponent } from './score/score.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component: TimerComponent},
  {path: 'score', component: ScoreComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
