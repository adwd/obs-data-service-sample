import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TodoStoreService } from '../todo-store.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  private selectedTodo?: Observable<Todo> = null;

  constructor(private todoStore: TodoStoreService) { }

  ngOnInit() {
  }

  select(id: string) {
    this.selectedTodo = this.todoStore.todos.map(todos => todos.find(todo => todo.id === id));
  }

  editTodo(todo: Todo) {
    console.log('edit start', todo);
    this.todoStore.edit(todo).subscribe(() => console.log('edit done'));
  }

}
