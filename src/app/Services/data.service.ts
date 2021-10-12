import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post, User } from '../Objects/post';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  postid! : number;

  constructor(private http: HttpClient) { }

  getPosts() : Observable<Post[]>
  {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getPost(id: number): Observable<Post> {
    return this.getPosts().pipe(map(x => x.find(p => p.id === id)!))
  }

  getUsers() : Observable<User[]>
  {
    return this.http.get<User[]>(this.usersUrl);
  }

  // getUser(id: number): Observable<string> {
  //   return this.getPosts().pipe(map(x => x.find(p => p.id === id)!))
  // }

}
