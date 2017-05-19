import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoStoreService } from './todo-store.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FakeTodoHttpService } from './fake-todo-http.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    TodoStoreService,
    FakeTodoHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
