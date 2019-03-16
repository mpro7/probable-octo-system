import { Component, OnInit } from '@angular/core';

import { User } from '../user.model';
import { UsersHandlingService } from '../users-handling.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title = 'simple user list';
  buttonsText = ['add user', 'edit user', 'delete user'];
  usersArray: User[];

  constructor(private readonly userHandling: UsersHandlingService) {}

  ngOnInit() {
    this.userHandling.initializeUsers().subscribe(val => this.usersArray = val);
  }
}
