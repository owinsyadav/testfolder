import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = new BehaviorSubject<string>('Owins')
  constructor() { }
  cast = this.user.asObservable()
  editUser(newUser){
    this.user.next(newUser)
  }
}
