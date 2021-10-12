import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/Objects/post';
import { DataService } from 'src/app/Services/data.service';
import { UserdialogComponent } from '../userdialog/userdialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private service: DataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe(posts => this.users = posts.slice(0,10))
    console.log(this.users)
  }

  openDialog(id: number) {
    let selectedUser = this.users.find(obj => obj.id == id)
    const dialogRef = this.dialog.open(UserdialogComponent, {data: selectedUser});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
