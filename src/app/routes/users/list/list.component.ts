import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserDto } from '../users.dto';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, OnDestroy {
  userList: UserDto[] = [];
  userListSubscription: Subscription = new Subscription();

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userListSubscription = this.userService.usersList.subscribe(
      (v) => (this.userList = v)
    );
  }

  ngOnDestroy(): void {
    this.userListSubscription.unsubscribe();
  }

  onChangeSearch(term: any) {
    const list = this.userService.usersList.getValue();
    const users: UserDto[] = list.filter((u: UserDto) =>
      u.name.toLowerCase().includes(term.target.value.toLowerCase())
    );

    this.userList = users;
  }

  removeUser(user: number) {
    try {
      this.userService.removeUser(user);
    } catch (e) {
      console.log(e);
    }
  }
}
