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
    this.generateInitialList();
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

  generateInitialList() {
    const list: UserDto[] = [
      {
        name: 'Gabriel',
        email: 'gabriel@email.com',
        cpf: 123,
        address: '',
        state: '',
        cep: '',
        city: '',
        created_at: new Date(),
      },
      {
        name: 'Filipe',
        email: 'flipe@email.com',
        cpf: 123,
        address: '',
        state: '',
        cep: '',
        city: '',
        created_at: new Date(),
      },
      {
        name: 'Renato',
        email: 'renato@email.com',
        cpf: 123,
        address: '',
        state: '',
        cep: '',
        city: '',
        created_at: new Date(),
      },
      {
        name: 'Alex',
        email: 'alex@email.com',
        cpf: 123,
        address: '',
        state: '',
        cep: '',
        city: '',
        created_at: new Date(),
      },
      {
        name: 'Douglas',
        email: 'douglas@email.com',
        cpf: 123,
        address: '',
        state: '',
        cep: '',
        city: '',
        created_at: new Date(),
      },
      {
        name: 'Pablo',
        email: 'pablo@email.com',
        cpf: 123,
        address: '',
        state: '',
        cep: '',
        city: '',
        created_at: new Date(),
      },
    ];

    if (!this.usersList.getValue().length)
      list.forEach((u) => this.createUser(u));
  }

  private loadListFromLocalStorage() {
    const list = localStorage.getItem('list') || null;
    if (list) this.usersList.next(JSON.parse(list));
  }
}
