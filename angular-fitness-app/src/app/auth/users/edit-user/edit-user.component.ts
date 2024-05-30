import { Component, Inject, OnInit } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from '../../../api.service';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-user',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.apiService
        .updateUser(this.data, this.data.id)
        .subscribe({
          next: (res) => console.log(res, 'user updated'),
          error: (err) => console.log(err, 'failed'),
        });
    } else {
      console.log('Form is invalid');
    }
  }
  ngOnInit(): void {}
}
