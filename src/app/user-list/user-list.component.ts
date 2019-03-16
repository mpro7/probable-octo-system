import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { User } from '../user.model';
import { UsersHandlingService } from '../users-handling.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  title = 'simple user list';
  buttonsText = [{text: 'add', style: 'btn-success'}, {text: 'edit', style: 'btn-warning'}, {text: 'delete', style: 'btn-danger'}];
  usersArray: User[];
  isUserAdded = false;
  UserFG: FormGroup;

  constructor(private readonly userHandling: UsersHandlingService, private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.userHandling.initializeUsers().subscribe(val => this.usersArray = val);
    this.createUserFormGroup();
  }

  onActionButton(param: string): void {
    switch (true) {
      case param === 'add':
      this.isUserAdded = !this.isUserAdded;
      break;
      case param === 'delete':
      this.deleteUser();
      break;
    }
  }

  closeAddition(): void {
    this.isUserAdded = false;
  }

  confirmAdditon(): void {
    const newUser: User = {facetName: this.user, amount: this.score};
    this.userHandling.addUser(newUser);
    this.usersArray = this.userHandling.getUsers();
  }

  deleteUser(): void {
    this.userHandling.deleteUser();
    this.usersArray = this.userHandling.getUsers();
  }

  createUserFormGroup(): FormGroup {
    return this.UserFG = this.fb.group({
      scoreFC: [null],
      userFC: [null]
    });
  }

  get score(): number {
    return this.UserFG.get('scoreFC').value;
  }

  get user(): string {
    return this.UserFG.get('userFC').value;
  }
}
