import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginComponent } from './comps/pages/login/login.component';
import { HomepageComponent } from './comps/pages/homepage/homepage.component';
import { AlbumsComponent } from './comps/pages/albums/albums.component';
import { UsersComponent } from './comps/pages/users/users.component';
import { TodosComponent } from './comps/pages/todos/todos.component';
import { PostsComponent } from './comps/pages/posts/posts.component';
import { AlbumComponent } from './comps/items/album/album.component';
import { CommentComponent } from './comps/items/comment/comment.component';
import { PhotoComponent } from './comps/items/photo/photo.component';
import { PostComponent } from './comps/items/post/post.component';
import { TodoComponent } from './comps/items/todo/todo.component';
import { UserComponent } from './comps/items/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './comps/items/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AlbumsComponent,
    UsersComponent,
    TodosComponent,
    PostsComponent,
    AlbumComponent,
    CommentComponent,
    PhotoComponent,
    PostComponent,
    TodoComponent,
    UserComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
