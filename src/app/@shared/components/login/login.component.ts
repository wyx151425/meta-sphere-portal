import {Component, OnInit} from '@angular/core';
import {LoginUser} from "../../models/dto/login-user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  passwordVisible: boolean = false;

  loginUser: LoginUser;

  constructor() {
    this.loginUser = new LoginUser();
  }

  ngOnInit(): void {
  }

  public login(): void {
    if (null === this.loginUser.mobilePhoneNumber || "" === this.loginUser.mobilePhoneNumber) {

    }
    if (null === this.loginUser.password || "" === this.loginUser.password) {

    }
  }
}
