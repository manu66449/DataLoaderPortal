import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../interface/User';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public isLogin: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public token: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(private _http: HttpClient, private route: Router) {}

  login(user: User) {
    if (this.token.getValue()) {
      return;
    }

    return this._http.post<any>(`http://localhost:8081/login`, user);
  }
}

export interface token {
  token: string;
}
