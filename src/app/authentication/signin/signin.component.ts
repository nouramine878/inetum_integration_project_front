import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SessionManService } from 'src/app/services/session-man.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  LoginForm: any = {
    username: null,
    password: null,
  };

  isLoginFailed = false;
  errorMessage = 'your username or password is incorrecte';

  constructor(
    private loginService: AuthService,
    private sessionMan: SessionManService,
    private router : Router
  ) {}

  ngOnInit(): void {}

  onLogin() {
    const { username, password } = this.LoginForm;
    this.loginService.login(username,password).subscribe(
      (data) =>{
        this.sessionMan.saveToken(data);
        this.isLoginFailed = false;
        this.router.navigate(['dashboard']);
      },
      () =>{
        this.isLoginFailed = true;
      }
    )
  }
}
