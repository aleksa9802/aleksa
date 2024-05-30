import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { User, UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  isEditing: boolean = false;
  profileForInput!: User;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public userService: UserService
  ) {}

  ngOnInit() {
    this.profileForInput = {
      id: this.data.user.id,
      email: this.data.user.email,
      date: this.data.user.date,
      password: this.data.user.password,
      address: this.data.user.address,
    };
  }

  finishEditing(form: NgForm) {
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.address = this.profileForInput.address;

    console.log(this.data.user);
    console.log(UserService.dummyUserlist);
    this.isEditing = true;
    console.log(this.isEditing);
  }
  checkId(): boolean {
    if (this.profileForInput.id == this.userService.currentUser.id) {
      return true;
    } else {
      return false;
    }
  }
}
