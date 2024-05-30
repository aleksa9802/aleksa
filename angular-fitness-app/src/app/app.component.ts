import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialModule } from './material.module';
import { UserService } from './auth/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from './auth/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MaterialModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-fitness-app';
  profileOpened!: boolean;

  constructor(public userService: UserService, private dialog: MatDialog) {}

  openProfile(userId: number) {
    this.profileOpened = true;

    const profileDialog = this.dialog.open(ProfileComponent, {
      disableClose: false,
      width: '40vw',
      data: { user: this.userService.getUserById(userId) },
    });

    profileDialog.afterClosed().subscribe((result) => {
      this.profileOpened = true;
    });
  }

  ngOnInit() {}
}
