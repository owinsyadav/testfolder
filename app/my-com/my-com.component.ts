import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-com',
  templateUrl: './my-com.component.html',
  styleUrls: ['./my-com.component.css']
})
export class MyComComponent implements OnInit {
  newUser; myUser
  constructor(private myser:UserService) { }

  ngOnInit() {
    this.myser.cast.subscribe(myuser => this.newUser = myuser)
  }
  editUsers(){
    this.myser.editUser(this.myUser)
  }

}
