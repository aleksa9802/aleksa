import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../../../material.module';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-stop-training',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './stop-training.component.html',
  styleUrl: './stop-training.component.scss',
})
export class StopTrainingComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public receivedData: any) {}
}
