import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { StopTrainingComponent } from './stop-training/stop-training.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-current-training',
  standalone: true,
  imports: [MaterialModule, StopTrainingComponent],
  templateUrl: './current-training.component.html',
  styleUrl: './current-training.component.scss',
})
export class CurrentTrainingComponent implements OnInit {
  progress = 0;
  timer: any;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }

  onFinish() {
    const dialogRef = this.dialog.open(StopTrainingComponent, {
      data: {
        progress: this.progress,
      },
    });
    clearInterval(this.timer);
    // this.progress = 0;
    dialogRef.afterClosed().subscribe((result) => {
      //console.log(result);
      //ovde umesto consol loga dodajemo result, mozemo preko novog dialoga ili preko druge komponente
      //na yes vraca true, na ne false inace, ali proveri
      if (result) {
        clearInterval(this.timer);
      } else {
        this.onResume();
        // ovde je pricao bezano za zadatak (ukoliko korisnik nije prijavljen da ga salje na sign up stranu
        // tj korisnik moze da narucuje i  cuva podatke, a neko ko nije samo da gleda )
      }
    });
  }
  onPause() {
    //this.dialog.open(StopTrainingComponent);
  }
  onResume() {
    this.timer = setInterval(() => {
      this.progress += 5;
      if (this.progress >= 100) {
        clearInterval(this.timer);
      }
    }, 1000);
  }
}

// ovde dodaj dijalog koji kada se klikne finish pokazuje kolko je treninga predjeno
