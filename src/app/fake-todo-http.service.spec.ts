import { TestBed, inject } from '@angular/core/testing';

import { FakeTodoHttpService } from './fake-todo-http.service';

describe('FakeTodoHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeTodoHttpService]
    });
  });

  it('should be created', inject([FakeTodoHttpService], (service: FakeTodoHttpService) => {
    expect(service).toBeTruthy();
  }));
});
