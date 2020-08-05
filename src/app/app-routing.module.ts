import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimerComponent } from './timer/timer.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {path: 'timer', component: TimerComponent},
  {path: 'score', component: ScoreComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
