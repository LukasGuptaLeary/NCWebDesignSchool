import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UsersService {
  constructor(private http: Http) {}

  addUser(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/api/user', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
  }

  login(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:3000/api/user/auth/login', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
  }

  getUser() {
    const headers = new Headers({'Content-Type': 'application/json'});
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : '';
    headers.append('Authorization', token);

    return this.http.get('http://localhost:3000/api/user', { headers: headers })
      .map((response: Response) => {
        const us = response.json().user;
        let user: User;
        if (us) {
          user = new User(us.email, '', us.firstName, us.lastName, us.admin, us.student.isStudent, us.faculty.isFaculty, us.id);
        }
        return user;
      })
      .catch((error: Response) => {
        return Observable.throw(error.json());
      });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
}
