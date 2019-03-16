import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersHandlingService {

  private userListArray: User[];

  constructor(private readonly http: HttpClient) {
    this.initializeUsers().subscribe(res => this.userListArray = res);
  }

  initializeUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://beta.rohub.org/portal/rosdata/allcreators');
  }

  getUsers(): User[] {
    const users = this.userListArray;
    return users;
  }

  addUser() {

  }

  editUser() {}

  deleteUser() {}
}
