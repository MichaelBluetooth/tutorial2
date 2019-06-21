import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MockUsers } from './mock-data/users'; // Import the list of mocked users so we can use it

export class user {
  loginEmail;
  loginPwd;
  accountStatus;
  isAdminRole;
  isAuthorRole;
  isVoterRole;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  authenticatedUser: user = null;

  constructor(private http: HttpClient) { }

  getUsers() {
    // Return the list of mocked users
    return Observable.create(o => o.next(MockUsers));

    // If we had a real api, we would just execute an http GET
    // We could also implement some kind of caching if we wanted to
    //return this.http.get('/api/v1/users');
  }

  login(user: user) {
    this.authenticatedUser = user;
  }

  logout() {
    this.authenticatedUser = null;
  }

  isLoggedIn() {
    return this.authenticatedUser !== null;
  }

  getCurrentUser() {
    return this.authenticatedUser;
  }
}
