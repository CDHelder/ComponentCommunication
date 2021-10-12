import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Post } from 'src/app/Objects/post';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts!: Post[];
  selectedId!: number;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getPosts().subscribe(posts => this.posts = posts.slice(0,10))
    console.log(this.posts)
  }

  displayDetails(id: number){
    console.log("Go to:",  id)
    this.selectedId = id;
    //this.router.navigate(["./posts", id])
  }
}
