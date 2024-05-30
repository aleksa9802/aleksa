import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { MaterialModule } from '../material.module';
import { CurrentTrainingComponent } from '../training/current-training/current-training.component';
import { NewTrainingComponent } from '../training/new-training/new-training.component';
import { PreviousTrainingComponent } from '../training/previous-training/previous-training.component';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from '../auth/profile/profile.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    RouterOutlet,
    AppComponent,
    MaterialModule,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PreviousTrainingComponent,
    ProfileComponent,
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {}
