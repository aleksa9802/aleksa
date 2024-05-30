import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MaterialModule } from '../../material.module';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProfileComponent } from '../profile/profile.component';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    AppComponent,
    MaterialModule,
    CommonModule,
    RouterLink,
    ProfileComponent,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  errorExists = false;
  errorText = '';
  hide = true;

  constructor(private router: Router, private apiService: ApiService) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      // if (form.value.email = ) {

      // }
      this.apiService.createData(form.value).subscribe({
        next: (res) => console.log(res, 'user created'),
        error: (err) => console.log(err, 'failed'),
      });
    }
    this.router.navigate(['']);
  }
}
