import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './PageComponents/home/home.component';
import { PostdetailsComponent } from './PageComponents/postdetails/postdetails.component';
import { PostsComponent } from './PageComponents/posts/posts.component';
import { UsersComponent } from './PageComponents/users/users.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'posts', component: PostsComponent
  },
  {
    path: 'users', component: UsersComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
