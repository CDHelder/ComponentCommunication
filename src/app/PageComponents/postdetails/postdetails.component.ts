import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/Objects/post';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.scss']
})
export class PostdetailsComponent implements OnInit {

  id!: number;
  post: Post = {} as Post;

  constructor(private activatedroute:ActivatedRoute, private service: DataService, private router: Router) { 

  }

  ngOnInit(): void {
    this.id = Number(this.activatedroute.snapshot.paramMap.get("id"));
    console.log("Postdetails got the id: ", this.id);

    this.service.getPost(this.id).subscribe(y => this.post = y);
    console.log(this.post.title);
  }

  return(){
    this.router.navigate(['/posts']);
  }

}
