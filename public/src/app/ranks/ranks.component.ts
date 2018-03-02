import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service'

@Component({
  selector: 'app-ranks',
  templateUrl: './ranks.component.html',
  styleUrls: ['./ranks.component.css']
})
export class RanksComponent implements OnInit {

  users

  constructor(private _service: UsersService) { }

  ngOnInit() {

    this._service.all(res =>{
      this.users = res.sort(function(a,b){
        return b.score - a.score;
      });
    });
  };
};
