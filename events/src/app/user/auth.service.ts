import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable( {providedIn: 'root'})
export class AuthService {

  currentUser: IUser;
  constructor() { }

  loginUser( username: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'James',
      lastName: 'Mukur',
      userName: 'jmukur'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(formValues){
      this.currentUser.firstName= formValues.firstName;
      this.currentUser.lastName= formValues.lastName;
  }
}
