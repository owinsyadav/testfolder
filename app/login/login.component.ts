import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: '[app-login]',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser
  constructor(private myser:UserService) { }

  ngOnInit() {
    this.myser.cast.subscribe(myuser => this.newUser = myuser)
  }

}
