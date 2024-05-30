import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { MaterialModule } from '../material.module';
import { CurrentTrainingComponent } from './current-training/current-training.component';
import { PreviousTrainingComponent } from './previous-training/previous-training.component';
import { NewTrainingComponent } from './new-training/new-training.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-training',
  standalone: true,
  imports: [
    AppComponent,
    MaterialModule,
    CurrentTrainingComponent,
    PreviousTrainingComponent,
    NewTrainingComponent,
    CommonModule,
  ],
  templateUrl: './training.component.html',
  styleUrl: './training.component.scss',
})

//08/02 23-24:00 event emiter
export class TrainingComponent {
  ongoingTraining = false;
}
