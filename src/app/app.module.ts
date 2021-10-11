import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';

import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PostsComponent } from './PageComponents/posts/posts.component';
import { HomeComponent } from './PageComponents/home/home.component';
import { UsersComponent } from './PageComponents/users/users.component';
import { PostdetailsComponent } from './PageComponents/postdetails/postdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
    PostsComponent,
    HomeComponent,
    UsersComponent,
    PostdetailsComponent
  ],
  imports: [
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
