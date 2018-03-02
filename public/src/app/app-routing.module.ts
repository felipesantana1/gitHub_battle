import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BattleComponent } from './battle/battle.component';
import { RanksComponent } from './ranks/ranks.component';
import { OutcomeComponent } from './outcome/outcome.component';

const routes: Routes = [
  {path:"", pathMatch:"full", component:BattleComponent},
  {path:"outcome", pathMatch:"full", component:OutcomeComponent},
  {path:"ranks", pathMatch:"full", component:RanksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
