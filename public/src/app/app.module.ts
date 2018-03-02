import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';
import { RanksComponent } from './ranks/ranks.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { UsersService } from './users.service';


@NgModule({
  declarations: [
    AppComponent,
    BattleComponent,
    RanksComponent,
    OutcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
