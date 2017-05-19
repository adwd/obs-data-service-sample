import { Component, OnInit } from '@angular/core';

import { TodoStoreService } from '../todo-store.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(private todoStore: TodoStoreService) { }

  ngOnInit() {
  }

}
