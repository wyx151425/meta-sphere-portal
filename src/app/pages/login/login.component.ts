import { Component, OnInit } from '@angular/core';
import {User} from "../../entities/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  passwordVisible: boolean = false;

  user: User = {mobilePhoneNumber: "15253620357", password: "wyx151425"};

  constructor() { }

  ngOnInit(): void {
  }

}
