import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MaterialModule } from '../../material.module';
import { ApiService } from '../../api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditUserComponent } from './edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent implements OnInit, AfterViewInit {
  usersTable = new MatTableDataSource<any>();

  displayedColumns = ['id', 'name', 'email', 'pword', 'buttons'];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator; //!jer zovemo u afterviewInitu

  doFilter(filterValue: string) {
    this.usersTable.filter = filterValue.trim().toLowerCase();
  }

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit() {
    this.apiService.getAllUsers().subscribe((res) => {
      this.usersTable.data = res.data;
      console.log(this.usersTable.data);
    });
  }

  ngAfterViewInit() {
    this.usersTable.sort = this.sort;
    this.usersTable.paginator = this.paginator;
  }

  getAllData() {
    this.apiService.getAllUsers().subscribe((res) => {
      this.usersTable.data = res.data;
    });
  }

  openDialog(userData: any): void {
    const dialogRef = this.dialog.open(EditUserComponent, {
      data: userData,
      backdropClass: 'backdropBackground',
      //disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result, 'The dialog was closed');
      this.getAllData();
    });
  }

  deleteUser(id: any) {
    this.apiService.deleteUser(id).subscribe((res) => {
      console.log(res, res.id);
      this.getAllData();
    });
  }
}
