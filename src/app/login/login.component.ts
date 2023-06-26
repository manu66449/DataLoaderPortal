import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../interface/User';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public error: boolean = false;
  constructor(private loginSvc: LoginService, private router: Router) {}

  ngOnInit(): void {}

  userModel = new User('', '');

  onSubmit() {
    this.loginSvc.login(this.userModel)?.subscribe(
      (res) => {
        this.router.navigate(['/home']);
      },
      (err) => {
        this.error = true;
      }
    );
  }
}
