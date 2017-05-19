import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

export interface Todo {
  id: string;
  text: string;
  done: boolean;
}

@Injectable()
export class FakeTodoHttpService {

  private todos: Todo[];

  constructor() {
    this.todos = [
      { id: '1', text: 'learn angular', done: true },
      { id: '2', text: 'write sample app', done: false }
    ];
  }

  fetch(): Observable<Todo[]> {
    return Observable.of(this.todos).delay(2000);
  }

}
