import { Injectable } from '@angular/core';

export interface User {
  id: number;
  email: string;
  password: string;
  date: Date;
  address?: string;
}

@Injectable()
export class UserService {
  currentUser: User = UserService.dummyUserlist[0];

  static dummyUserlist: Array<User> = [
    {
      id: 1,
      email: 'asd@asd',
      password: '12345678',
      date: new Date('2023-05-11 16:56'),
    },
    {
      id: 2,
      email: 'dsa@dsa',
      password: '321456789',
      date: new Date('2023-02-10 18:56'),
    },
  ];

  getEmail(user: User) {
    return user.email;
  }

  getUserById(id: number): User {
    var foundUser!: User;
    UserService.dummyUserlist.forEach((user) => {
      if (user.id == id) {
        foundUser = user;
      }
    });
    this.currentUser = foundUser;
    return foundUser;
  }
  getUserByEmail(userEmail: string): User {
    // return UserService.dummyUserlist.find(
    //   (userToFind) => userToFind.email == userEmail
    // )!;
    // ne radi
    this.currentUser = UserService.dummyUserlist.find(
      (userTofind) => userTofind.email == userEmail
    )!;
    return this.currentUser;
  }
  isPasswordCorrect(userEmail: string, password: string): boolean {
    return (
      UserService.dummyUserlist.find(
        (userToFind) =>
          userToFind.email == userEmail && userToFind.password == password
      ) != undefined
    );
  }

  registerUser(email: string, password: string, date: Date): User {
    var maxId: number = 0;

    UserService.dummyUserlist.forEach((user) => {
      if (maxId < user.id) {
        maxId = user.id;
      }
    });
    var id = ++maxId;

    var user: User = {
      id,
      email,
      password,
      date,
    };
    UserService.dummyUserlist.push(user);
    this.currentUser = user;
    console.log(user);
    return user;
  }
}
