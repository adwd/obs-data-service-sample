import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnChanges {

  @Input()
  todo: Todo;

  @Output()
  submit = new EventEmitter<Todo>();

  // Inputで渡ってきた値をそのまま書き換えたくないのでコピーを持つ
  private _todo: Todo;

  constructor() { }

  ngOnChanges() {
    this._todo = {...this.todo};
  }

  onSubmit() {
    this.submit.emit(this._todo);
  }

}
