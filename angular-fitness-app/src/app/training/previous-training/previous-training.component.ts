import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-previous-training',
  standalone: true,
  imports: [MaterialModule, CommonModule],
  templateUrl: './previous-training.component.html',
  styleUrl: './previous-training.component.scss',
})
export class PreviousTrainingComponent implements OnInit, AfterViewInit {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'status'];
  exerciseSource = new MatTableDataSource<Exercise>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  doFilter(filterValue: string) {
    this.exerciseSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private trainingService: TrainingService) {
    console.log(this.trainingService.getExercises());
  }

  ngOnInit() {
    this.exerciseSource.data = this.trainingService.getExercises();
  }

  ngAfterViewInit() {
    this.exerciseSource.sort = this.sort;
    this.exerciseSource.paginator = this.paginator;
  }
}
