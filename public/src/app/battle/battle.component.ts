import { Component, OnInit } from '@angular/core';
import { UsersService } from './../users.service';
import { User } from './user';
import { Router } from "@angular/router";


@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  user1 = "";
  user2 = "";

  player1;
  player2;

  notUser1 = false;
  notUser2 = false;

  message="User was not found, Please try again!";

  constructor(private _service: UsersService, private _router: Router) { }

  ngOnInit() {
  }

  userOne(){
    console.log("Submitted")
    this._service.gitHub_API(this.user1, res =>{
      if(res.message == "Not Found"){
        this.notUser1 = true;
      } else {
        this.player1 = new User();
        this.player1.avatar = res.avatar_url;
        this.player1.username = res.login;
        this.player1.score = (res.public_repos + res.followers)*12;
      };
    });
  };

  userTwo(){
    this._service.gitHub_API(this.user2, res =>{
      if(res.message == "Not Found"){
        this.notUser2 = true;
      } else {
        this.player2 = new User();
        this.player2.avatar = res.avatar_url;
        this.player2.username = res.login;
        this.player2.score = (res.public_repos + res.followers)*12;
      };
    });
  };

  battle(){
    this._service.create_update(this.player1, res => {console.log("Successfully Created!")});
    this._service.create_update(this.player2, res => {console.log("Successfully Created!")});
    this._service.setplayers(this.player1, this.player2);
    this._router.navigateByUrl('/outcome');
  }

}
