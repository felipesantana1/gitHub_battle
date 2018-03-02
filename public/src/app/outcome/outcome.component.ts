import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { platform } from 'os';
@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.css']
})
export class OutcomeComponent implements OnInit {

  winner;
  loser;

  constructor(private _service: UsersService) { }

  ngOnInit() {

    var player1 = this._service.getPlayer1();
    var player2 = this._service.getPlayer2();

    if(player1.score > player2.score){
      this.winner = player1;
      this.loser = player2;
    } else {
      this.winner = player2;
      this.loser = player1;
    }
  }

}
