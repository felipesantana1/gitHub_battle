import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class UsersService {

  apiToken = "7319e1c7d2bbb420e92891ec3f2c0d9c9a36fe24";
  player1;
  player2;

  constructor(private _http: Http) { }

  gitHub_API(username, callBack){
    this._http.get(`https://api.github.com/users/${username}?access_token=${this.apiToken}`).subscribe(
      res => {
        callBack(res.json());
      },
      err => {
        callBack(err.json());
      }
    );
  };

  all(callBack){
    this._http.get('users').subscribe(
      res => {
        callBack(res.json());
      },
      err => {
        console.log(err.json());
        callBack(err.json());
      }
    );
  };

  create_update(data, callBack){
    this._http.put('/users', data).subscribe(
      
      res => {
        console.log(data);
        callBack(res.json());
      },
      err => {
        callBack(err.json());
      }
    );
  };

  setplayers(player1, player2){
    this.player1 = player1;
    this.player2 = player2;
  }

  getPlayer1(){
    return this.player1;
  }

  getPlayer2(){
    return this.player2;
  }
}
