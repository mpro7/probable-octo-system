import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  usersArray: User[];

  constructor() { }

  ngOnInit() {
    this.usersArray = [
      {name: 'anon', score: 1},
      {name: 'baton', score: 2},
      {name: 'canon', score: 3}
    ]
  }

}
