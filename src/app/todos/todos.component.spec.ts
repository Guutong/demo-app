import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosComponent } from './todos.component';
import { TodosService } from '../services/todos.service';

describe('TodosComponent', () => {
  let component;

  beforeEach(() => {
    const service = new TodosService();
    component = new TodosComponent(service);
  });

  it('should delete todo item form service', () => {
    component.todosService.todos = [{
      id: 1,
      title: 'title',
      detail: 'detail',
      category: 'category1',
      status: false
    }];

    component.delete({
      id: 1,
      title: 'title',
      detail: 'detail',
      category: 'category1',
      status: false
    });

    expect(component.todosService.todos).toEqual([]);
  });
});
