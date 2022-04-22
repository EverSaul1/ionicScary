import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin = new FormGroup({
    usuario: new FormControl(''),
    password: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

  login(){
    console.log(this.formLogin.value);
  }
}
