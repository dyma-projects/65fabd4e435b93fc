import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  public users!: string[];

  constructor(
    private userService: UserService // il faut probablement injecter un service ici !
  ) {}

  ngOnInit() {
    // il faut initialiser les users ici avec le service
    this.userService.users.subscribe((x) => {
      this.users = x;
    });
  }
}
