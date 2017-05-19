import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { FakeTodoHttpService, Todo } from './fake-todo-http.service';

@Injectable()
export class TodoStoreService {
  private _todos: BehaviorSubject<Array<Todo>> = new BehaviorSubject([]);
  public readonly todos: Observable<Array<Todo>> = this._todos.asObservable();

  constructor(private todoHttp: FakeTodoHttpService) {
    todoHttp.fetch().subscribe(todos => this._todos.next(todos));
  }
}
