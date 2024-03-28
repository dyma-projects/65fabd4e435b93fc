import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public users: BehaviorSubject<string[]> = new BehaviorSubject([
    'takou',
    'ibrahim',
  ]);

  constructor() {}
  addUser(user: string): void {
    const usersIntern = this.users.getValue();
    usersIntern.push(user);
    this.users.next(usersIntern);
  }
}
