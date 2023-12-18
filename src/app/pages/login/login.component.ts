import {Component, OnInit} from '@angular/core';
import {LoginUser} from "../../@shared/models/dto/login-user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  passwordVisible: boolean = false;

  private loginUser: LoginUser;

  constructor() {
    this.loginUser = new LoginUser();
  }

  ngOnInit(): void {
  }

  public login(): void {

  }
}
