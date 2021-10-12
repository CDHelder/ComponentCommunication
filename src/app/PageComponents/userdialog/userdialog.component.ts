import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { User } from 'src/app/Objects/post';

@Component({
  selector: 'app-userdialog',
  templateUrl: './userdialog.component.html',
  styleUrls: ['./userdialog.component.scss']
})
export class UserdialogComponent implements OnInit {

user!: User;

  constructor( @Inject(MAT_DIALOG_DATA) public data: User) { }

  ngOnInit(): void {
    this.user = this.data
  }

}
