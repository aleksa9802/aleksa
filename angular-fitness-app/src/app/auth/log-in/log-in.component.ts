import { Component } from '@angular/core';
import { AppComponent } from '../../app.component';
import { MaterialModule } from '../../material.module';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [AppComponent, MaterialModule, RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss',
})
export class LogInComponent {
  errorExists = false;
  errorText = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit(form: NgForm) {
    var email = form.value.email;
    var password = form.value.password;
    var user = this.userService.getUserByEmail(email);

    if (!user) {
      this.errorExists = true;
      this.errorText = 'No such user with: ' + email;
      return;
    }

    var isPasswordValid = this.userService.isPasswordCorrect(email, password);

    if (!isPasswordValid) {
      this.errorExists = true;
      this.errorText = 'incorrect password';
      return;
    }
    this.errorExists = false;
    this.router.navigate(['']);
  }
}
