import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Todo } from './todo.model';

/**
 * httpっぽい挙動をするっぽいサービス
 */
@Injectable()
export class FakeTodoHttpService {

  private todos: Todo[];

  constructor() {
    this.todos = [
      { id: '1', text: 'learn angular', done: true },
      { id: '2', text: 'write sample app', done: false }
    ];
  }

  /**
   * 2秒の遅延付きでTodoを返す
   */
  fetch(): Observable<Todo[]> {
    return Observable.of(this.todos).delay(2000);
  }

  /**
   * 2秒の遅延後Todoを更新する
   * @param todo
   * @returns {any|Observable<T>}
   */
  edit(todo: Todo): Observable<void> {
    const index = this.todos.findIndex(t => t.id === todo.id);
    if (index === -1) {
      return Observable.throw(new Error(`todo id: ${todo.id} is not found`))
        .delay(2000);
    }

    return Observable.of(null)
      .delay(2000)
      .do(() => this.todos[index] = todo);
  }

}
