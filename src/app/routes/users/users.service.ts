import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDto } from './users.dto';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usersList = new BehaviorSubject<UserDto[] | []>([]);

  constructor() {
    this.loadListFromLocalStorage();

    // this.createUser({
    //   name: 'Gaabriel',
    //   email: 'gabriel',
    //   cpf: 123,
    //   address: '',
    //   state: '',
    //   cep: '',
    //   city: '',
    //   created_at: new Date(),
    // });
    // this.createUser({
    //   name: 'Renato',
    //   email: 'gabriel',
    //   cpf: 123,
    //   address: '',
    //   state: '',
    //   cep: '',
    //   city: '',
    //   created_at: new Date(),
    // });
  }

  createUser(userInfos: UserDto) {
    const users = [...this.usersList.getValue(), userInfos];
    this.usersList.next(users);

    const storage = JSON.stringify(users);
    localStorage.setItem('list', storage);
  }

  removeUser(id: number) {
    const users = this.usersList.getValue();
    users.splice(id, 1);

    this.usersList.next(users);

    const storage = JSON.stringify(users);
    localStorage.setItem('list', storage);
  }

  private loadListFromLocalStorage() {
    const list = localStorage.getItem('list') || null;
    if (list) this.usersList.next(JSON.parse(list));
  }
}
