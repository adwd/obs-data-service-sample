import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/concatMapTo';

import { FakeTodoHttpService } from './fake-todo-http.service';
import { Todo } from './todo.model';

@Injectable()
export class TodoStoreService {
  private _todos: BehaviorSubject<Array<Todo>> = new BehaviorSubject([]);
  public readonly todos: Observable<Array<Todo>> = this._todos.asObservable();

  constructor(private todoHttp: FakeTodoHttpService) {
    this.fetch().subscribe(todos => console.log(todos));
  }

  /**
   * Todoを取得する。
   * 取得したときに、その値で_todosをnextして値を最新のものに更新する。
   * @returns {Observable<Todo[]>}
   */
  fetch(): Observable<Todo[]> {
    return this.todoHttp.fetch().do(todos => this._todos.next(todos));
  }

  /**
   * Todoを変更する。
   * 変更後、fetchを実行して_todosの値を最新のもの更新する。
   * @param todo
   * @returns {Observable<Todo[]>}
   */
  edit(todo: Todo): Observable<Todo[]> {
    return this.todoHttp.edit(todo).concatMapTo(this.fetch());
  }
}
